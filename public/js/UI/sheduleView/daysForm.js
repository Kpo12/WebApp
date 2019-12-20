

const defaultTime = ["09:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00"]


export const daysForm = {
    view: "form",
    id: "daysForm",
    width: 240,
    elements: [
        {
            view: "fieldset", id: 104, label: "понедельник", body: {
                cols: [
                    { view: "richselect", options: defaultTime, icon: "mdi mdi-clock-in",},
                    { view: "richselect", options: defaultTime, icon: "mdi mdi-clock-out",},
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