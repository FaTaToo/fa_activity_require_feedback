from odoo import models, fields


class MailActivity(models.Model):
    _inherit = "mail.activity"

    require_feedback = fields.Boolean(related='activity_type_id.require_feedback', readonly=True)
