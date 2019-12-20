export const emplList = {
    id: "empColumn",
    rows: [
      {
        height: 35,
        view: "toolbar",
        elements: [
          { view: "text", id: "empList_lastName", placeholder: "Поиск..", css: "fltr", labelWidth: 55 }
        ]
      },
      {
        view: "list",
        id: "empList",
        template: "#lastName# #firstName# #middleName# <div style='padding-left:18px'> должность:#position#</div>",
        type: {
          height: 62
        },
        select: true,
      },
    ],
    width: 220,
  }