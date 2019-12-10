package entities

//Time base entity
type Time struct {
	Start    string `json:"start"`
	End      string `json:"end"`
	ExpTime  string `json:"expTime"`
	RealTime string `json:"realTime"`
}
