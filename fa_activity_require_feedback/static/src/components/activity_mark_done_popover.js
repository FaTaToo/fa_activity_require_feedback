/** @odoo-module **/
import { patch } from 'web.utils';
import { ActivityMarkDonePopover } from '@mail/components/activity_mark_done_popover/activity_mark_done_popover';


patch(ActivityMarkDonePopover.prototype, 'gb_la.ActivityMarkDonePopover', {
    /**
     * @private
     */
    async _onClickDone() {
        const def_super = this._super;
        if (this.activity.requireFeedback && !this._feedbackTextareaRef.el.value) {
            let requireFeedback = document.querySelector('.o_ActivityMarkDonePopover_requireFeedback');
            requireFeedback.style.color = "red";
        }
        else {
            def_super();
        }
    },

    /**
     * @private
     */
    async _onClickDoneAndScheduleNext() {
        const def_super = this._super;
        if (this.activity.requireFeedback && !this._feedbackTextareaRef.el.value) {
            let requireFeedback = document.querySelector('.o_ActivityMarkDonePopover_requireFeedback');
            requireFeedback.style.color = "red";
        }
        else {
            def_super();
        }
    }
});
