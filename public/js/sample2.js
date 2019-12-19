import { sidebarNav } from './components/sidebarNav.js';

export let baseUrl = new URL('http://localhost:9000/')

webix.ready(function () {
  webix.i18n.setLocale("ru-RU");

  const menu_data = [
    { id: "sumTable", icon: "mdi mdi-table", value: "Сводный табель", },
    { id: "setShedule", icon: "mdi mdi-view-dashboard", value: "Редактирование графика", },
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
      onAfterSelect: sidebarNav
    }
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
});

