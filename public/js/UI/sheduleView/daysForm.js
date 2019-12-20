

const defaultTime = {
    start: Date.parse("9:00"),
    end: new Date(0, 0, 0, 18, 0),
}

export const daysForm = {
    view: "form",
    id: "daysForm",
    width: 240,
    elements: [
        {
            view: "fieldset", id: 104, label: "понедельник", body: {
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
    ],

}

function renderDays(){
    let weekday = ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"]
    let day = {
        view: "fieldset", label: "", body: {
            cols: [
                { view: "datepicker", type: "time", value: defaultTime.start },
                { view: "datepicker", type: "time", value: defaultTime.end }
            ]
        }
    }
    for (let d of weekday) {
      
    }
}