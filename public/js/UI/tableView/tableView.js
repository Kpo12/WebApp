import { mainTable } from "./mainTable.js"
import { dateRangeForm } from "./dateRangeForm.js"



export const tableView = {
    view: "layout",
    id: "tableView",
    rows: [
        dateRangeForm,
        mainTable,
    ]
}