import { renderMainTable } from './renderMainTable.js';
import { renderSheduleLayout } from './renderSheduleLayout.js';
import { emplList } from '../UI/sheduleView/emplList.js';
import { baseUrl } from '../app.js';

const defaultTime = ["00:00", "08:00", "09:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00", "19:00", "20:00", "21:00"]
export const weekday = ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"]


export function sidebarNav(id) { //обработчики событий на сайдбаре
  webix.message(this.getItem(id).value)

  let select = this.getItem(id).id
  switch (select) {
    case "setShedule":
      $$("sidebarRender").removeView("tableView")
      //$$("sidebarRender").attachEvent("onAfterSelect", )
      GetEmployees()
      $$("sidebarRender").addView(emplList);
      $$("empList").attachEvent("onBeforeSelect", renderSheduleLayout)
      $$("empList").attachEvent("onAfterSelect", getEmployeShedule)

    break;
    case "sumTable":
      $$("sidebarRender").removeView("empColumn")
      $$("sidebarRender").removeView("sheduleLayout")

      renderMainTable()
    break;
  }
}

function GetEmployees() {
  fetch('/employ')
    .then(response => response.json())
    .then(res => $$("empList").define("data", res.Data))
}

function getEmployeShedule(event) {
  console.log(event)
  let shedUrl = new URL(('employ/' + event + '/pshedule'), baseUrl)
  history.pushState('','', shedUrl)

  for (let d of weekday) { //формирование формы расписания
    let day = {
      view: "fieldset", id: d, name: d, body: {
        cols: [
          { view: "richselect", id: `${d}start`, name: `${d}start`, options: defaultTime, icon: "mdi mdi-clock-in", title: "#value#" },
          { view: "richselect", id: `${d}end`, name: `${d}end`, options: defaultTime, icon: "mdi mdi-clock-out", title: webix.template("Selected: #value#") },
        ]
      }
    }
    $$("daysForm").addView(day)
  }

  let button = {
    cols: [
      { view: "button", label: "Сохранить", id: "button", css: "webix_primary", click: PostPlanShedule },
    ]
  }
  $$("daysForm").addView(button)

  let weekdayView = ["понедельник", "вторник", "среда", "четверг", "пятница", "суббота", "воскресенье"]
  for (let i = 0; i < weekdayView.length; i++) { //цикл для установки дней недели на форму
    let d = weekday[i]
    //console.log(d)
    $$(d).define('label', weekdayView[i])
  }
  $$("daysForm").refresh()

  fetch(shedUrl)
    .then(response => response.json())
    .then(res => setSheduleValues(res.Data.shedule))

}

function PostPlanShedule() { //обработка формы постоянного расписания
  
  var data = $$("daysForm").getValues()
  console.log(data)

  let pshedule = []
  for (let d in weekday) {
    let shedDay =
    {
      "start": data[`${weekday[d]}start`],
      "end": data[`${weekday[d]}end`],
      "weekday": weekday[d]
    }
    pshedule.push(shedDay)
  }

  console.log(pshedule)

  console.log(location.pathname)

  fetch(location.pathname, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8'
    },
    body: JSON.stringify(pshedule)
  }).then(response => response.json())
    .then(res => setSheduleValues(res.Data))
    .then(webix.message('расписание установлено'))
}

function setSheduleValues(data) {
  for (let d of weekday) {
    let day = data.find(shed => shed.weekday == d)
    $$(d).queryView({ id: `${d}start` }).setValue(day.start)
    $$(d).queryView({ id: `${d}end` }).setValue(day.end)
  }
}

