import {setDateRange} from '../../components/tableComponent.js'


export const dateRangeForm = {
  view: "form",
  cols: [
    {
      view: "daterangepicker",
      name: "dateRange",
      id: "rangePicker",
 
      //stringResult: true,
      value: { start: new Date(), end: new Date() }
    },
    {view: "button", value: "Построить", width: 200, css: "webix_primary", click: setDateRange}
  ]
}


