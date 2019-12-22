export const mainTable = {
  view: "datatable",
  id: "mainTable",
  css: "webix_header_border",
  columns: [
    { id: "1", template: "#lastName# #firstName# #middleName#", header: [{ text: "Сотрудник" }, { content: "textFilter" }], width: 180 },
  ],
  autoheight: true,
  autowidth: true,
  editable: true,
}



