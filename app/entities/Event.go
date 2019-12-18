package entities

//Event base entity
type Event struct {
	ID    int64  `json:"id"`
	Start string `json:"start"`
	End   string `json:"end"`
	Date  string `json:"date"`
}
