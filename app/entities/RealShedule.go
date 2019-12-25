package entities

//RealShedule base entity
type RealShedule struct {
	ID            int64  `json:"id"`
	Start         string `json:"start"`
	End           string `json:"end"`
	ExpectedHours int64  `json:"expectedhours"`
	RealHours     int64  `json:"realhours"`
	EmployeID     int64  `json:"employeid"`
}
