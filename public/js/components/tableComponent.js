import { tableView } from '../UI/tableView/tableView.js'

export function renderMainTable() {
    $$("sidebarRender").addView(tableView);

    fetch('/employ')
    .then(response => response.json())
    .then(res => tableLayout(res.Data))
}

export function setDateRange() {
    let values = this.getFormView().getValues();
    let daterange = []
    let start = values.dateRange.start
    let end = values.dateRange.end
    if (end != undefined){
        while (start <= end) {
            let currDay = start.getDate()
            let currMonth = start.getMonth()+1
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
        //console.log(daterange)
    
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

function tableLayout(data){

    console.log(data)
    $$("tableLayout").addView({view: "template", template: "Сотрудник"}, 0)
    for (let row in data){
        console.log(data[row].id)
        $$("tableLayout").addView({view: "template", id: data[row].id, template: data[row].lastName})
    }
}

/*function renderCells(daterange, data) {
    console.log(data)

    for (let d in daterange) {
        $$("tableLayout").addView({view: "template", id: 'data[row].id', template: daterange[d]})
        //console.log(data[daterange[d]])
        for (let s in data[daterange[d]]){
            console.log(data[daterange[d]][s].employeid)
            console.log($$("1"))
        }
    }
}*/