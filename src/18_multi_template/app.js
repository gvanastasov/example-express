const express = require('express'),
  engines     = require('consolidate'),
  path        = require('path'),
  pug         = require('pug');

const viewsPath = path.join(__dirname, 'views');

/**
 * @description Helper function to render template string
 * from one template engine inside another one.
 * 
 *      Note:
 *          for demo purpose only one template engine (PUG)
 *          is added to the strategy, but you can add as many
 *          as you want to. Unfortunatelly, consolidatejs does
 *          not expose interface directly to the render function
 *          so we need a reference to the template engine itself.
 * 
 * @example
 *        EJS template
 *           - render(PUG template)  
 */
function render(relativePath, options) {
  let absolutePath = path.join(viewsPath, relativePath);
  let engine = relativePath.split('.').pop();

  let strategy = {
    'pug': () => pug.renderFile(absolutePath, options), 
  }

  return (strategy[engine] && strategy[engine]()) 
    || '<!-- unsupported engine -->';
}

const app = express();

app.locals.render = render;

app.engine('html', engines.ejs);
app.engine('ejs', engines.ejs);
app.engine('pug', engines.pug);

app.set('view engine', 'html');
app.set('views', viewsPath)

/**
 * @description entrypoint for demo
 * 
 * default ejs template will include 1 EJS template and will 
 * try to render 2 others, namely PUG and Mustache. Since we
 * have not configured Mustache in our strategy above, it will
 * output a comment.
 * 
 *    Input (psudo):
 *        EJS template
 *          - include EJS template
 *          - render PUG template
 *          - render Mustache template
 * 
 *    Output:
 *        <div>template_1: EJS</div>
 *        <div> template_2: PUG, rendered inside EJS</div>
 *        <!-- unsupported engine -->
 */
app.get('/', (_req, res) => {
  res.render('index');
});

/**
 * @description simply rendering EJS template.
 */
app.get('/ejs', (_req, res) => {
  res.render('template_1.ejs');
})

/**
 * @description simply rendering PUG template.
 */
app.get('/pug', (_req, res) => {
  res.render('template_2.pug', { parentTemplateType: 'PUG' });
});

/**
 * @description will throw an error since we have not configured 
 * this template engine.
 */
app.get('/mustache', (_req, res) => {
  res.render('template_3.mustache', { parentTemplateType: 'Mustache' });
});

module.exports = { app }