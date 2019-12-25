import { mainTable } from "./mainTable.js"
import { dateRangeForm } from "./dateRangeForm.js"

export const tableView = {
    view: "layout",
    responsive: true,
    id: "tableView",
    rows: [
        dateRangeForm,
        {
            view: "layout",
            id: "tableLayout",
            rows:[]
        },
    ]
}