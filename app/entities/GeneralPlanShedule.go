package entities

//GeneralPlanShedule , provided plan shedule and events
type GeneralPlanShedule struct {
	Shedule [](*PlanShedule) `json:"shedule"`
	Events  [](*Event)       `json:"events"`
}
