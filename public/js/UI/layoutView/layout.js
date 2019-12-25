import { sidebarNav } from "../../components/sidebarComponent.js";

const menu_data = [
    { id: "sumTable", icon: "mdi mdi-table", value: "Сводный табель", },
    { id: "setShedule", icon: "mdi mdi-view-dashboard", value: "Редактирование графика", },
];

export const toolbar = {
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

export const sidebar = {
    view: "sidebar",
    data: menu_data,
    collapsed: true,
    width: 220,
    on: {
        onBeforeSelect: sidebarNav
    }
}
