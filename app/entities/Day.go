package entities

//Day base entity
type Day struct {
	ID      int64  `json:"id"`
	Date    string `json:"date"`
	WeekDay string `json:"workTime"`
}
