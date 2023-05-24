const express = require('express'),
    fs          = require('fs'),
    path        = require('path')

function baseController(options, context) {
    this.options = options;
    this.context = context;
    this.view = function(options) {
        let optionsInternal = { ...this.options, ...options };
        let viewName = optionsInternal.viewName || 'index';
        this.context.responseContext.res.render(viewName, { viewBag: optionsInternal.bag });
    }
}

const generateRouteTable = function(parent, options = { default: { controller: 'home', action: 'index' }}) {
    const controllersRegex = /-controller.js$/;
    const controllersDirectory = path.join(__dirname, '..', 'controllers');
    
    fs
        .readdirSync(controllersDirectory)
        .forEach(name => {
            let file = path.join(controllersDirectory, name);

            // todo: can be improved with nested directories, but for simplicity
            // sake, 0 level depth is used.
            if (fs.statSync(file).isDirectory()) {
                return;
            }

            if (!controllersRegex.test(name)) {
                return;
            }
            
            let [controllerName] = name.split(controllersRegex)

            let obj = require(file);
            let actions = Object.keys(obj).reduce((arr, key) => {
                let property = obj[key];
                
                let isObject = typeof property === 'object' &&
                    !Array.isArray(property) &&
                    property !== null;
                if (!isObject) {
                    return;
                }

                let isAction = property.hasOwnProperty('action');
                if (!isAction) {
                    return;
                }

                arr.push({ 
                    name: key, 
                    route: { method: property.method }, 
                    handler: property.action 
                });

                return arr;
            }, []);

            var app = express();
            app.set('views', path.join(__dirname, '..', 'views', controllerName))

            actions.forEach(action => {
                let method = action.route.method || 'get';
                let route = `/${controllerName}/${action.name}`;
                let viewName = action.name;
                
                let handler = (req, _res, _next) => {
                    function controller() {
                        this.action = action.handler;
                    }
                    controller.prototype = new baseController({ viewName }, req.context);
                    controller.prototype.constructor = controller;

                    var instance = new controller();
                    instance.action();
                };

                app[method](route, handler);

                if (viewName === options.default.action) {
                    app[method](`/${controllerName}`, handler);
                }

                if (controllerName === options.default.controller) {
                    app[method]('/', handler);
                }
            })

            parent.use(app);
        })
}

module.exports = { generateRouteTable }