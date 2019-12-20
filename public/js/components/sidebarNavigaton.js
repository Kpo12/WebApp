import { renderMainTable } from './renderMainTable.js';
import { renderSheduleLayout } from './renderSheduleLayout.js';
import { emplList } from '../UI/sheduleView/emplList.js';
import { baseUrl } from '../main.js';

export function sidebarNavigaton(id) {
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

function GetEmployees(foobar){
  fetch('/employ')
  .then(response => response.json())
  .then(res => $$("empList").define("data", res.Data))

}

function getEmployeShedule(event) {
  console.log(event)

  let shedUrl = new URL(('employ/' + event + '/pshedule'), baseUrl)

  let foobar = $$('daysForm')

  fetch(shedUrl)
    .then(response => response.json())
    .then(res => foobar.define("data", res.Data.shedule))

}