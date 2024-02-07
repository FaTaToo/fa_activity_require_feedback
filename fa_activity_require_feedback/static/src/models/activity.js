/** @odoo-module **/
import {
    registerClassPatchModel,
    registerFieldPatchModel,
} from '@mail/model/model_core';
import { attr } from '@mail/model/model_field';

registerClassPatchModel('mail.activity', 'fa_activity_require_feedback/static/src/models/activity.js', {
    //----------------------------------------------------------------------
    // Public
    //----------------------------------------------------------------------

    /**
     * @override
     */
    convertData(data) {
        const data2 = this._super(data);
        if ('require_feedback' in data) {
            data2.requireFeedback = data.require_feedback;
        }
        return data2;
    },
});

registerFieldPatchModel('mail.activity', 'fa_activity_require_feedback/static/src/models/activity.js', {
    requireFeedback: attr(),
});