package employeprovider

//Employe just test struct for data
type Employe struct {
	ID   int64  `json:"id"`
	Name string `json:"firstname"`
}

//GetEmployees provide Employe to controller
func GetEmployees() []*Employe {
	list := []*Employe{
		{ID: 1, Name: "A"},
		{ID: 2, Name: "B"},
		{ID: 3, Name: "C"},
	}
	return list
}
