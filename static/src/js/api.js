

odoo.define('custom_module.api', function(require) {
    "use strict";
    var rpc = require('web.rpc');
    var session = require('web.session');
    
    rpc.query({
        model: 'res.users',
        method: 'search_read',
        domain: [['id', '=', session.user_id]],
        fields: ['name'],
    }).then(function(result) {
        console.log("menu username")
        var b_username = document.getElementById('b_username');
        
        if (b_username) {
            b_username.innerText = "Bonjour "+result[0].name+",";
        }
    });


});
