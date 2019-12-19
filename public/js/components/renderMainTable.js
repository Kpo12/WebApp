import { tableView } from '../UI/tableView/tableView.js'

const data = [
    { id: "1", date: "12/01/2019", planHours: 1, factHours: 1, start: "9:00", end: "18:00" },
    { id: "2", date: "12/01/2019", planHours: 2, factHours: 2, start: "10:00", end: "18:00" },
    { id: "3", date: "12/02/2019", planHours: 3, factHours: 3, start: "11:00", end: "18:00" },
    { id: "4", date: "12/02/2019", planHours: 4, factHours: 4, start: "12:00", end: "18:00" },
];

export function renderMainTable() {
    $$("sidebarRender").addView(tableView);
    $$("mainTable").define("data", data)

    fetch('/employ')
        .then(response => response.json())
        .then(res => $$("mainTable").define("data", res.Data))
    //.then(res => console.log(res.Data))

    $$("mainTable").config.columns.push({ id: "#id#", template: "#start#", width: 65 });
    $$("mainTable").config.columns.push({ id: "end", template: "#end#", width: 65 });
    $$("mainTable").config.columns.push({ id: "dynamicDate", template: "#planHours#", width: 65 });
    $$("mainTable").config.columns.push({ id: "dynamicData", template: "#factHours#", width: 65, editor: "text" });
    $$("mainTable").config.columns[2].header = ["", "Конец"];
    $$("mainTable").config.columns[4].header = ["", "Факт,ч"];
    $$("mainTable").config.columns[3].header = ["", "План,ч"];
    $$("mainTable").config.columns[1].header = [{ text: data[0].date, colspan: 4 }, "Начало"];



    $$("mainTable").refreshColumns();
}