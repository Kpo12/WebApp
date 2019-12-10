webix.ready(function () {
  webix.i18n.setLocale("ru-RU");


  var data = [
    {id: "1", name: "worker1", date: "12/01/2019", planHours: 1, factHours:1, start:"9:00", end:"18:00"},
    {id: "2", name: "worker2", date: "12/01/2019", planHours: 2, factHours:2, start:"10:00", end:"18:00"},
    {id: "3", name: "worker3", date: "12/02/2019", planHours: 3, factHours:3, start:"11:00", end:"18:00"},
    {id: "4", name: "worker4", date: "12/02/2019", planHours: 4, factHours:4, start:"12:00", end:"18:00"},
  ];

  let mainTable = {
    view:"datatable",
    id: "mainTable",
    css:"webix_header_border",
    map:{
      day:"#start# #end#",
    },
    columns:[
      { id:"name",	header:{ text:"Сотрудник", rowspan:2}},
    ],
    autoheight:true,
    autowidth:true,
    editable:true,
    data: data
  }

  webix.ui({rows:[
    table,
  ]});

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
});

