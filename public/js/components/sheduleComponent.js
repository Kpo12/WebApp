import { sheduleLayout } from "../UI/sheduleView/sheduleLayout.js"

export function sheduleComponent() {
  if ($$("sheduleLayout")){
    $$("sidebarRender").removeView("sheduleLayout")
  }
  $$("sidebarRender").addView(sheduleLayout)
  $$("eventCalendar").attachEvent("onDateSelect", addEvent)
}

function addEvent(event) {
  $$("eventsLayout").addView({
    view: "form",
    width: 237,
    elements: [
      {
        cols: [
          { view: "datepicker", value: event },
          { view: "button", width: 40, css: "webix_primary" },
          { view: "button", width: 40, }
        ]
      },
      {
        cols: [
          { view: "datepicker", type: "time", value: "" },
          { view: "datepicker", type: "time", value: "" }
        ]
      },
    ]
  })

  console.log(event)  //$$("eventCalendar").getValue() === event
}