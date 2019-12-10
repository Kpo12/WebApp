webix.ready(function () {
  webix.i18n.setLocale("ru-RU");

  const menu_data = [
    { id: "tables", icon: "mdi mdi-table", value: "Сводный табель", },
    { id: "dashboard", icon: "mdi mdi-view-dashboard", value: "Редактирование графика", },
  ];
  
  var data = [
    {id: "1", name: "worker1", date: "12/05/2019", planHours: 8, factHours:8},
    {id: "2", name: "worker2", date: "12/05/2019", planHours: 8, factHours:8},
    {id: "3", name: "worker3", date: "12/02/2019", planHours: 3, factHours:3},
    {id: "4", name: "worker4", date: "12/01/2019", planHours: 6, factHours:5},
    
  ];

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
        webix.message("Selected: " + this.getItem(id).value)
        console.log(this.getItem(id))
      }
    }
  }

  var dateFormat = webix.Date.strToDate("%m/%d/%Y");

  // a new control (filter type)
  webix.protoUI({
    name: "mydaterange",
    $css: "daterangepicker",
    // returns string value:
    // start date timestamp +".."+end date timestamp
    getValue: function () {
      var value = this.config.value;
      if (!value.start && !value.end) return "";

      var start = value.start ? value.start.valueOf() : "";
      var end = value.end ? value.end.valueOf() : "";
      return start + ".." + end;
    }
  }, webix.ui.daterangepicker);

  // filter name to display
  webix.i18n.pivot.mydaterange = "date-range picker";

  let table = {
    id:"pivot",
    view:"pivot",
    editable:true,
    separateLabel: true,
    datatable:{
        autoheight: true
    },
    scheme: {
      $init: function (item) {
        // add a new field with "date" timestamp
        // fields that begin with "$" are not shown in "Fields" list
        item.$date = dateFormat(item.date).valueOf();
      }
    },
    structure: {
        rows: [ "name" ],
        filters:[{name: "name", type: "multiselect"}, {name: "date", type: "mydaterange"}],
        columns: ["date"],
        values: [{ name:"planHours"}, { name:"factHours"} ]
    },
    // fields for filtering
    filterMap: {
        date: "$date"
    }
  }

  webix.ui({         // основной каркас UI
    view: "layout",
    id: "root",
    //responsive: true,
    rows: [
      toolbar,
      {
        cols: [
          sidebar,
          table
        ]
      }
    ]
  })

  var tab = $$("pivot").getChildViews()[1];
  //enable edit operations 
  tab.define("editable", true)
  //set editor of first column
  tab.config.columns[0].editor = "text";

  $$("pivot").filters.add("mydaterange");
  $$("pivot").parse(data);
});

