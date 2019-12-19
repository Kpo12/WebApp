const defaultTime = {
    start: new Date(2019, 11, 5, 9, 0),
    end: new Date(2019, 11, 5, 18, 0),
}

export const daysForm = {
    view: "form",
    width: 240,
    elements: [
        {
            view: "fieldset", label: "понедельник", body: {
                cols: [
                    { view: "datepicker", type: "time", value: defaultTime.start },
                    { view: "datepicker", type: "time", value: defaultTime.end }
                ]
            }
        },
        {
            view: "fieldset", label: "вторник", body: {
                cols: [
                    { view: "datepicker", type: "time", value: defaultTime.start },
                    { view: "datepicker", type: "time", value: defaultTime.end }
                ]
            }
        },
        {
            view: "fieldset", label: "среда", body: {
                cols: [
                    { view: "datepicker", type: "time", value: defaultTime.start },
                    { view: "datepicker", type: "time", value: defaultTime.end }
                ]
            }
        },
        {
            view: "fieldset", label: "четверг", body: {
                cols: [
                    { view: "datepicker", type: "time", value: defaultTime.start },
                    { view: "datepicker", type: "time", value: defaultTime.end }
                ]
            }
        },
        {
            view: "fieldset", label: "пятница", body: {
                cols: [
                    { view: "datepicker", type: "time", value: defaultTime.start },
                    { view: "datepicker", type: "time", value: defaultTime.end }
                ]
            }
        },
        {
            view: "fieldset", label: "суббота", body: {
                cols: [
                    { view: "datepicker", type: "time", value: defaultTime.start },
                    { view: "datepicker", type: "time", value: defaultTime.end }
                ]
            }
        },
        {
            view: "fieldset", label: "воскресенье", body: {
                cols: [
                    { view: "datepicker", type: "time", value: defaultTime.start },
                    { view: "datepicker", type: "time", value: defaultTime.end }
                ]
            }
        },
        {
            cols: [
                { view: "button", label: "Сохранить", type: "form", css: "webix_primary" },
            ]
        }
    ]
}