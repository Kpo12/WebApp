import { dateRangeForm } from "./dateRangeForm.js"

export const tableView = {
    view: "scrollview",
    responsive: true,
    scroll:"xy",
    id: "tableView",
    body:{
    rows: [
        dateRangeForm,
        {
            view: "layout",
            id: "tableLayout",
            rows:[]
        },
    ]}
}