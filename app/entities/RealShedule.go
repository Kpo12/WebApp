package entities

//RealShedule base entity
type RealShedule struct {
	ID            int64
	Start         string
	End           string
	ExpectedHours string
	RealHours     string
	Date          Day
}
