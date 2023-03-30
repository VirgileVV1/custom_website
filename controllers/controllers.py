# -*- coding: utf-8 -*-
from odoo import http
from odoo.http import request
import requests
import json 
import base64
from odoo.tools import html_escape
import jinja2 

class CustomWebsite(http.Controller):
    #@http.route('/profile/', auth='public', website=True)
    @http.route('/my/home', auth='public', website=True)
    def profile(self, **kw):
        print("profile")

        connected_user = {  "id" : request.env.user.id,
                            "name": request.env.user.name,
                            "email": request.env.user.email,
                            "phone": request.env.user.partner_id.phone,
                            "mobile": request.env.user.partner_id.mobile,
                            "image_1920": request.env.user.partner_id.image_1920,
                            "country": request.env.user.partner_id.country_id.name, #inutile
                            "company": request.env.user.company_id.name
                        }
                
        ariane_pages = [{"title":"Mon profil", "link":"/my/home"}, {"title":"Mon profil2", "link":"/my/home2"}]
            
        parameters = {
            "page_name":"profile",              # nom de la page
            "ariane_pages":ariane_pages,        # liste des pages pour le fil d'ariane
            "menu":True,                        # est ce qu il y a un menu dans la page
            "connected_user":connected_user,    # informations de l'utilisateur 
        }

        #return request.render('custom_website.profile', parameters)
        return request.render('custom_website.template', parameters)



    @http.route('/index/', auth='public', website=True)
    def index(self, **kw):
        print("index")
        franchise = {"nom": "jean"}
        return request.render('custom_website.test',franchise)


#     @http.route('/custom_website/custom_website/objects', auth='public')
#     def list(self, **kw):
#         return http.request.render('custom_website.listing', {
#             'root': '/custom_website/custom_website',
#             'objects': http.request.env['custom_website.custom_website'].search([]),
#         })

#     @http.route('/custom_website/custom_website/objects/<model("custom_website.custom_website"):obj>', auth='public')
#     def object(self, obj, **kw):
#         return http.request.render('custom_website.object', {
#             'object': obj
#         })
