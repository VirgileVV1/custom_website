

odoo.define('custom_website.api', function(require) {
    "use strict";
    var rpc = require('web.rpc');
    var session = require('web.session');
    console.log("api2")
    console.log(session.user_id)

    
    // Votre code de manipulation des données ici
    rpc.query({
        model: 'res.users',
        method: 'search_read',
        domain: [['id', '=', session.user_id]],
        fields: ['name'],
    }).then(function(result) {
        console.log("menu username")
        var b_username = document.getElementById('b_username');
        console.log(result)
        if (b_username) {
            b_username.innerText = "Bonjour "+result[0].name+",";
        }
    });
    




});
