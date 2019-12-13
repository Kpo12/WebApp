package employeprovider

import (
	db "WebApp/app/db"
	entity "WebApp/app/entities"
	mapper "WebApp/app/mappers"
)

//EmployeProvider for Employe entity
type EmployeProvider struct {
}

//GetEmployees provide all Employees to controller
func (e *EmployeProvider) GetEmployees() (list [](*entity.Employe), err error) {
	db, err := db.Init()
	defer db.Close()

	s := new(mapper.EmployeMapper)
	list, err = s.Select(db)
	return list, err
}

//GetEmploye provide selected Employe to controller
func (e *EmployeProvider) GetEmploye(id string) (*entity.Employe, error) {
	db, err := db.Init()
	defer db.Close()

	s := new(mapper.EmployeMapper)
	list, err := s.SelectByID(db, id)
	return list, err
}
