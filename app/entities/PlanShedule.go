package entities

//PlanShedule contain time for every day of the week
//and excluded events
type PlanShedule struct {
	ID      int64  `json:"id"`
	Start   string `json:"start"`
	End     string `json:"end"`
	Weekday string `json:"weekday"`
}
