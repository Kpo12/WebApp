import { tableView } from '../UI/tableView/tableView.js'



export function renderMainTable() {
    $$("sidebarRender").addView(tableView);

    fetch('/employ')
        .then(response => response.json())
        .then(res => $$("mainTable").define("data", res.Data))
        .then($$("mainTable").refreshColumns())

}

export function setDateRange() {

    var values = this.getFormView().getValues();

    //console.log(weekday[values.default.start.getDay()]);
    //console.log(weekday[values.default.end.getDay()]);
    fetch('/shedule/expect')
        .then(response => response.json())
        .then(res => renderCells(values.default.start, res.Data))
    //.then(res => console.log(res.Data)
}

function renderCells(day, data) {
    let weekday = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"]
    console.log(weekday[day.getDay()])
    {
        for (let d in data) {
            if (d == weekday[day.getDay()]) {
                let currentDay = data[d]
                console.log(currentDay)

                $$("mainTable").config.columns.push({ id: "#planid#", template: "#start#", width: 65, header: [{ text: day, colspan: 4 }, "Начало"] })
                $$("mainTable").config.columns.push({ id: "Конец", template: "#end#", width: 65, header: ["", "Конец"] }),
                $$("mainTable").config.columns.push({ id: "План,ч", template: "", width: 65, header: ["", "План,ч"] });
                $$("mainTable").config.columns.push({ id: "Факт,ч", template: "", width: 65, editor: "text", header: ["", "Факт,ч"] });
                $$("mainTable").refreshColumns()
                $$("mainTable").define('data', currentDay)
  
            }
        }
    }
}
