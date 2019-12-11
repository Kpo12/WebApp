package entities

//Employe base entity
type Employe struct {
	ID         int64  `json:"id"`
	Firstname  string `json:"firstname"`
	Lastname   string `json:"lastname"`
	Middlename string `json:"middlename"`
	Position   string `json:"position"`
}
