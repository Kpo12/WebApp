package entities

//TableShedule ...
type TableShedule struct {
	ID         int64  `json:"planid"`
	FirstName  string `json:"firstName"`
	LastName   string `json:"lastName"`
	MiddleName string `json:"middleName"`
	EmployeID  int64  `json:"id"`
	Start      string `json:"start"`
	End        string `json:"end"`
	Weekday    string
}
