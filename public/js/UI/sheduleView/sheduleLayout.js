import { calendar } from './calendar.js';
import { daysForm } from './daysForm.js';

export const sheduleLayout = {
    view: "layout",
    id: "sheduleLayout",
    scrollY: true,
    cols: [
        daysForm,
        {
            rows: [
                calendar,
                {
                    view: "flexlayout",
                    id: "eventsLayout",
                    scrollY: true,
                    rows: []
                },
            ]
        },
    ]
}