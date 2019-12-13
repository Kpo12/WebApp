package entities

//PlanShedule contain time for every day of the week
//and excluded events
type PlanShedule struct {
	ID      int64
	Start   string
	End     string
	Weekday string
}
