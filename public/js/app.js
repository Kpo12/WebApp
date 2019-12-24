import { sidebar, toolbar } from './UI/layout/layout.js';

export let baseUrl = new URL('http://localhost:9000/')

webix.ready(function () {
  webix.i18n.setLocale("ru-RU");

  webix.ui({         // основной каркас UI
    view: "layout",
    id: "root",
    //responsive: true,
    scrollY: true,
    rows: [
      toolbar,
      {
        view: "layout",
        id: "sidebarRender",
        //responsive: true,
        scrollY: true,
        cols: [
          sidebar,
        ]
      }
    ]
  })
});

