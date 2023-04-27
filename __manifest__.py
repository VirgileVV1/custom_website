# -*- coding: utf-8 -*-
{
    'name': "Portal Customization",

    'summary': """
        website customization for customer portal """,

    'description': """
        Long description of module's purpose
    """,

    'author': "M@n Virgile",
    'website': "https://www.monassistantnumerique.com/",

    # Categories can be used to filter modules in modules listing
    # Check https://github.com/odoo/odoo/blob/16.0/odoo/addons/base/data/ir_module_category_data.xml
    # for the full list
    'category': 'Portal',
    'version': '0.1',

    # any module necessary for this one to work correctly
    'depends': ['base'],

    # always loaded
    'data': [
        # 'security/ir.model.access.csv',
        'views/views.xml',
        'views/templates.xml',
        'views/profile.xml',
        'views/menu.xml',
        'views/test.xml',
    ],
    #
    #'assets': {
        #'web.assets_frontend': [
        #    'custom_website/static/src/css/profile.css',
        #    'custom_website/static/src/css/profile2.css',
        #],
    #},
    #
    # only loaded in demonstration mode
    'demo': [
        'demo/demo.xml',
    ],
}
