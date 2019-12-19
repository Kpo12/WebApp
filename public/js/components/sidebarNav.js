import { renderMainTable } from './renderMainTable.js';
import { renderSheduleLayout } from './renderSheduleLayout.js';
import { emplList } from '../UI/sheduleView/emplList.js';
import { baseUrl } from '../sample2.js';

export function sidebarNav(id){
    webix.message(this.getItem(id).value)
    let select = this.getItem(id).id
    switch (select) {
      case "setShedule":
        $$("sidebarRender").removeView("tableView")
        $$("sidebarRender").attachEvent("onAfterSelect", fetch('/employ')
          .then(response => response.json())
          .then(res => $$("empList").define("data", res.Data)))

        $$("sidebarRender").addView(emplList);
        $$("empList").attachEvent("onAfterSelect", renderSheduleLayout)
        $$("empList").attachEvent("onAfterSelect", getEmployeID)
        
      break;
      case "sumTable":
        $$("sidebarRender").removeView("empColumn")
        $$("sidebarRender").removeView("sheduleLayout")

        renderMainTable()
        
      break;
    }
}

function getEmployeID(event){
    console.log(event)
    let shedUrl = new URL(('employ/' + event + '/pshedule'), baseUrl)

    fetch(shedUrl)
    .then(response => response.json())
    .then(res => console.log(res.Data))
}