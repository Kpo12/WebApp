package entities

//Employe base entity
type Employe struct {
	ID         int64  `json:"id"`
	Firstname  string `json:"firstName"`
	Lastname   string `json:"lastName"`
	Middlename string `json:"middleName"`
	Position   string `json:"position"`
}
