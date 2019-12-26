import { tableView } from '../UI/tableView/tableView.js'

export function renderMainTable() {
    $$("sidebarRender").addView(tableView);
}

export function setDateRange() {
    let values = this.getFormView().getValues();
    let daterange = []
    let start = values.dateRange.start
    let end = values.dateRange.end
    if (end != undefined) {
        while (start <= end) {
            let currDay = start.getDate()
            let currMonth = start.getMonth() + 1
            let currYear = start.getFullYear()
            if (currDay < 10) {
                currDay = '0' + currDay;
            }
            if (currMonth < 10) {
                currMonth = '0' + currMonth;
            }
            let currDate = currYear + "-" + currMonth + "-" + currDay
            daterange.push(currDate)
            start.setDate(start.getDate() + 1)
        }

        fetch('/shedule', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(daterange)
        })
            .then(response => response.json())
            .then(res => renderCells(daterange, res.Data))
    } else webix.message("Необходимо ввести диапазон дат")
}

function renderCells(daterange, data) {

    fetch('/employ')
        .then(response => response.json())
        .then(res => tableLayout(res.Data, daterange, data))

}

function tableLayout(empl, daterange, data) {
    /*console.log(empl)
    console.log(daterange)
    console.log(data)*/

    let layout = {
        rows: [
            { cols: [{ view: "template", id: "0", template: "Сотрудник", width: 200, height: 90 }], },

        ]
    }

    for (let row in empl) {
        //console.log(empl[row].id)

        layout.rows.push({ cols: [{ view: "template", id: empl[row].id, template: `${empl[row].lastName} ${empl[row].firstName}`, width: 200, height: 70, }] })
    }

    for (let date in daterange) {
        layout.rows[0].cols.push({
            rows: [
                { view: "template", id: daterange[date], template: daterange[date], type: "header" },
                { cols: [{ view: "template", template: "Рабочий день", }, { view: "template", template: "План, ч", }, { view: "template", template: "Факт, ч", }] },
            ]
        })
        for (let e in empl) {
            layout.rows[parseInt(e) + 1].cols.push(
                {
                    rows: [
                        { view: "template", id: `${empl[e].id}/${daterange[date]}/start`, template: "", width: 75, },
                        { view: "template", id: `${empl[e].id}/${daterange[date]}/end`, template: "", width: 75 }
                    ]
                },
                { view: "template", id: `${empl[e].id}/${daterange[date]}/expectedhours`, template: "", width: 75 },
                { view: "textarea", id: `${empl[e].id}/${daterange[date]}/realhours`, value: "", width: 75 })
        }
    }

    webix.ui(layout, $$('tableLayout'))

    for (let d in data) {
        console.log(d)
        console.log(data[d])
        for (let shed in data[d]) {
            console.log(data[d][shed].start)
            $$(`${data[d][shed].employeid}/${d}/start`).define('template', data[d][shed].start)
            $$(`${data[d][shed].employeid}/${d}/start`).refresh()
            $$(`${data[d][shed].employeid}/${d}/end`).define('template', data[d][shed].end)
            $$(`${data[d][shed].employeid}/${d}/end`).refresh()
            $$(`${data[d][shed].employeid}/${d}/expectedhours`).define('template', data[d][shed].expectedhours)
            $$(`${data[d][shed].employeid}/${d}/expectedhours`).refresh()
            $$(`${data[d][shed].employeid}/${d}/realhours`).define('value', data[d][shed].realhours)
            $$(`${data[d][shed].employeid}/${d}/realhours`).refresh()
        }
    }

}