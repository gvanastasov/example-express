const map = function(obj, route){
    route = route || '';

    Object.keys(obj).forEach(key => {
        let property = obj[key];

        switch (typeof property) {
            case 'object':
                let childRoute = route + key;
                this.map(property, childRoute);
                break;
            
            case 'function':
                this[key](route, property);
        }
    });
};
module.exports = { map }