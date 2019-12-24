import { tableView } from '../UI/tableView/tableView.js'

export function renderMainTable() {
    $$("sidebarRender").addView(tableView);

    fetch('/employ')
        .then(response => response.json())
        .then(res => $$("mainTable").define("data", res.Data))
        .then($$("mainTable").refreshColumns())

}

export function setDateRange() {

    let values = this.getFormView().getValues();
    let daterange = []
    let start = values.dateRange.start
    let end = values.dateRange.end
    if (end != undefined){
        while (start <= end) {
            daterange.push(start.toString())
            start.setDate(start.getDate() + 1)
        }
        console.log(daterange)
    
        fetch('/shedule', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(daterange)
        })
            .then(response => response.json())
            .then(res => console.log(res))
            .then(renderCells(daterange))
    } else webix.message("Необходимо ввести диапазон дат")
    
}

function renderCells(daterange) {
    $$("mainTable").config.columns = [
        { id: "#id#", template: "#lastName# #firstName# #middleName#", header: [{ text: "Сотрудник" }, { content: "textFilter" }], width: 180 },
      ]
    $$("mainTable").refreshColumns(); 

    for (let d in daterange) {
        $$("mainTable").config.columns.push({ id: `${daterange[d]}start`, template: "", width: 65, header: [{ text: daterange[d], colspan: 4 }, "Начало"] })
        $$("mainTable").config.columns.push({ id: `${daterange[d]}end`, template: "", width: 65, header: ["", "Конец"] })
        $$("mainTable").config.columns.push({ id: `${daterange[d]}expected`, template: "", width: 65, header: ["", "План,ч"] })
        $$("mainTable").config.columns.push({ id: `${daterange[d]}real`, template: "", width: 65, editor: "text", header: ["", "Факт,ч"] })
        $$("mainTable").refreshColumns()
    }
}