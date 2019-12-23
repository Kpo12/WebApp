import {setDateRange} from '../../components/renderMainTable.js'


export const dateRangeForm = {
  view: "form",
  cols: [
    {
      view: "daterangepicker",
      name: "default",
      id: "rangePicker",
      width: 300,
      //stringResult: true,
      value: { start: new Date(), end: new Date() }
    },
    {view: "button", value: "Построить", width: 200, css: "webix_primary", click: setDateRange}
  ]
}


