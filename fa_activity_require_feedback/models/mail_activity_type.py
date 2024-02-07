from odoo import models, fields


class MailActivityType(models.Model):
    _inherit = "mail.activity.type"

    require_feedback = fields.Boolean('Require Feedback', help='Require feedback when mark done activity.')
