package entities

//Employe base entity
type Employe struct {
	ID         int64  `json:"id"`
	Firstname  string `json:"name"`
	Lastname   string
	Middlename string
	Position   string `json:"position"`
}
