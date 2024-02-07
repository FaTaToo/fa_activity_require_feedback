{
    'name': "Activity Require Feedback",
    'category': 'Productivity/Discuss',
    'summary': "Require feedback input when an activity is done as a configuration option.",
    'author': "Dolphin Tech (fatuca2019@gmail.com)",
    'version': '15.0.1.0.0',
    'depends': [
        'mail'
    ],
    'data': [
        'views/mail_activity_type_views.xml',
    ],
    'qweb': [
    ],
    'assets': {
        'web.assets_backend': [
            'fa_activity_require_feedback/static/src/components/activity_mark_done_popover.js',
            'fa_activity_require_feedback/static/src/models/activity.js',
        ],
        'web.assets_qweb': [
            'fa_activity_require_feedback/static/src/components/activity_mark_done_popover.xml',
        ],
    },
    'installable': True,
    'application': False,
    'license': 'LGPL-3',
    'price': 9.9,
    'currency': "USD",
    'images': ['static/description/banner.gif'],
}
