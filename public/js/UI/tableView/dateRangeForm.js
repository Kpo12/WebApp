export const dateRangeForm = {
    view: "form",
    cols: [
      {
        view: "daterangepicker",
        name: "default",
        id: "rangePicker",
        width: 300,
        value: { start: new Date(), end: new Date() }
      },
      {
        view: "button", value: "Построить", width:200, css: "webix_primary", click: setDateRange
      }
    ]
}

function setDateRange() {
    var values = this.getFormView().getValues();
    console.log(JSON.stringify(values, null, 2));
}
