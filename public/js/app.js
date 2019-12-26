import { sidebar, toolbar } from './UI/layoutView/layout.js';

webix.ready(function () {
  webix.i18n.setLocale("ru-RU");

  webix.ui({         // основной каркас UI
    view: "layout",
    id: "root",
    scrollY: true,
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

