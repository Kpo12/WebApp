webix.ready(function () {
  webix.i18n.setLocale("ru-RU");

  const menu_data = [
    { id: "sumTable", icon: "mdi mdi-table", value: "Сводный табель", },
    { id: "setShedule", icon: "mdi mdi-view-dashboard", value: "Редактирование графика", },
  ];

  const data = [
    {id: "1", name: "worker1", date: "12/01/2019", planHours: 1, factHours:1, start:"9:00", end:"18:00"},
    {id: "2", name: "worker2", date: "12/01/2019", planHours: 2, factHours:2, start:"10:00", end:"18:00"},
    {id: "3", name: "worker3", date: "12/02/2019", planHours: 3, factHours:3, start:"11:00", end:"18:00"},
    {id: "4", name: "worker4", date: "12/02/2019", planHours: 4, factHours:4, start:"12:00", end:"18:00"},
  ];

  const workers = [
    { id: 1, name: 'worker1', position: "jun" },
    { id: 2, name: 'worker2', position: "mid" },
    { id: 3, name: 'worker3', position: "manager" },
  ]

  let defaultTime = {
    start: new Date(2019, 11, 5, 9, 0),
    end: new Date(2019, 11, 5, 18, 0),
  }

  let emplList = {
    id: "empColumn",
    rows: [
      {
        height: 35,
        view: "toolbar",
        elements: [
          { view: "text", id: "workerList_input", placeholder: "Поиск..", css: "fltr", labelWidth: 55 }
        ]
      },
      {
        view: "list",
        id: "empList",
        template: "#name# <div style='padding-left:18px'> должность:#position#</div>",
        type: {
          height: 62
        },
        select: true,
        data: workers,
      },
    ],
    width: 220,
  }

  let calendar = {
    weekHeader: true,
    weekNumber: true,
    view: "calendar",
    id:"eventCalendar",
    events: webix.Date.isHoliday,
    width: 480,
    height: 320,
  }

  let toolbar = {
    view: "toolbar", padding: 3, elements: [
      {
        view: "button", type: "icon", icon: "mdi mdi-menu",
        width: 37, align: "left", css: "app_button", click: function () {
          $$("$sidebar1").toggle();
        }
      },
      { view: "label", label: "Учет рабочего времени" },
      {},
      { view: "button", type: "icon", label: "Войти", width: 80, css: "app_button", icon: "mdi mdi-account", }
    ]
  }

  let sidebar = {
    view: "sidebar",
    data: menu_data,
    collapsed: true,
    width: 220,
    on: {
      onAfterSelect: function (id) {
        webix.message(this.getItem(id).value)
        console.log(this.getItem(id).id)
        let select = this.getItem(id).id
        switch (select) {
          case "setShedule":
            $$("sidebarRender").removeView("tableView")
            $$("sidebarRender").addView(emplList);
            $$("empList").attachEvent("onAfterSelect", renderSheduleLayout)
          break;
          case "sumTable":
            $$("sidebarRender").removeView("empColumn")
            $$("sidebarRender").removeView("sheduleLayout")
            renderMainTable()
          break;
        }
      }
    }
  }

  let daysForm = {
    view: "form",
    width: 240,
    elements: [
      {
        view: "fieldset", label: "понедельник", body: {
          cols: [
            { view: "datepicker", type: "time", value: defaultTime.start },
            { view: "datepicker", type: "time", value: defaultTime.end }
          ]
        }
      },
      {
        view: "fieldset", label: "вторник", body: {
          cols: [
            { view: "datepicker", type: "time", value: defaultTime.start },
            { view: "datepicker", type: "time", value: defaultTime.end }
          ]
        }
      },
      {
        view: "fieldset", label: "среда", body: {
          cols: [
            { view: "datepicker", type: "time", value: defaultTime.start },
            { view: "datepicker", type: "time", value: defaultTime.end }
          ]
        }
      },
      {
        view: "fieldset", label: "четверг", body: {
          cols: [
            { view: "datepicker", type: "time", value: defaultTime.start },
            { view: "datepicker", type: "time", value: defaultTime.end }
          ]
        }
      },
      {
        view: "fieldset", label: "пятница", body: {
          cols: [
            { view: "datepicker", type: "time", value: defaultTime.start },
            { view: "datepicker", type: "time", value: defaultTime.end }
          ]
        }
      },
      {
        view: "fieldset", label: "суббота", body: {
          cols: [
            { view: "datepicker", type: "time", value: defaultTime.start },
            { view: "datepicker", type: "time", value: defaultTime.end }
          ]
        }
      },
      {
        view: "fieldset", label: "воскресенье", body: {
          cols: [
            { view: "datepicker", type: "time", value: defaultTime.start },
            { view: "datepicker", type: "time", value: defaultTime.end }
          ]
        }
      },
      {
        cols: [
          { view: "button", label: "Сохранить", type: "form", css: "webix_primary" },
        ]
      }
    ]
  }

  let sheduleLayout = {
    view: "layout",
    id: "sheduleLayout",
    cols: [
      daysForm,
      {
        rows: [
          calendar,
          {
            view: "flexlayout",
            id: "eventsLayout",
            //responsive:true,
            rows: []
          },
        ]
      },
    ]
  }

  let rangeForm = {
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
        view: "button", value: "Построить", width:200, css: "webix_primary", click: function () {
          var values = this.getFormView().getValues();
          console.log(JSON.stringify(values, null, 2));
        }
      }
    ]
  }

  let mainTable = {
    view:"datatable",
    id: "mainTable",
    css:"webix_header_border",
    columns:[
      { id:"name",	header:[{ text:"Сотрудник"},{ content:"textFilter" }], width: 180},
    ],
    autoheight:true,
    autowidth:true,
    editable:true,
    data: data
  }

  let tableView = {
    view: "layout",
    id: "tableView",
    rows:[
      rangeForm,
      mainTable,
    ]
  }

  webix.ui({         // основной каркас UI
    view: "layout",
    id: "root",
    //responsive: true,
    rows: [
      toolbar,
      {
        view: "layout",
        id: "sidebarRender",
        cols: [
          sidebar,
        ]
      }
    ]
  })

  function renderSheduleLayout (){
    ($$("sheduleLayout")) ? $$("sidebarRender").removeView(sheduleLayout):

    $$("sidebarRender").addView(sheduleLayout)
    $$("eventCalendar").attachEvent("onDateSelect", addEvent)
  }

  function addEvent(event){
    $$("eventsLayout").addView({
      view: "form",
      width: 237,
      elements: [
        {cols:[
          { view: "datepicker", value: event },
          { view: "button", width:40, css: "webix_primary"},
          { view: "button", width:40, }
        ]},
        {cols:[
          { view: "datepicker", type: "time", value: "" },
          { view: "datepicker", type: "time", value: "" }
        ]},
      ]
    })
    
    console.log(event)  //$$("eventCalendar").getValue() === event
  }

  function renderMainTable(){
    $$("sidebarRender").addView(tableView);
 
    $$("mainTable").config.columns.push({ id: "start", template: "#start#", width: 65 });
    $$("mainTable").config.columns.push({ id: "end", template: "#end#", width: 65 });
    $$("mainTable").config.columns.push({ id: "dynamicDate", template: "#planHours#", width: 65 });
    $$("mainTable").config.columns.push({ id: "dynamicData", template: "#factHours#", width: 65 , editor:"text"});
    $$("mainTable").config.columns[2].header = ["", "Конец"];
    $$("mainTable").config.columns[4].header = ["", "Факт,ч"];
    $$("mainTable").config.columns[3].header = ["", "План,ч"];
    $$("mainTable").config.columns[1].header = [{ text: data[0].date, colspan: 4 }, "Начало"];
    $$("mainTable").config.columns.push({ id: "start", template:"#start#", width:65});
    $$("mainTable").config.columns.push({ id: "end", template:"#end#", width:65});
    $$("mainTable").config.columns.push({ id: "dynamicDate", template:"#planHours#", width:65});
    $$("mainTable").config.columns.push({ id: "dynamicData", template:"#factHours#", width:65, editor:"text"});
    $$("mainTable").config.columns[6].header = ["", "Конец"];
    $$("mainTable").config.columns[8].header = ["", "Факт,ч"];
    $$("mainTable").config.columns[7].header = ["", "План,ч"];
    $$("mainTable").config.columns[5].header = [{text: data[3].date, colspan:4}, "Начало"];
    
    $$("mainTable").refreshColumns();
  }
});

