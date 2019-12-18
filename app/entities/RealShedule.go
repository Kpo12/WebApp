package entities

//RealShedule base entity
type RealShedule struct {
	ID            int64  `json:"id"`
	Start         string `json:"start"`
	End           string `json:"end"`
	ExpectedHours string `json:"expectedhours"`
	RealHours     string `json:"realhours"`
	Date          string `json:"date"`
}
