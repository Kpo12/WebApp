package employeprovider

import (
	db "WebApp/app/db"
	entity "WebApp/app/entities"
	mapper "WebApp/app/mappers"
)

//EmployeProvider for Employe entity
type EmployeProvider struct {
	mapper mapper.EmployeMapper
}

//GetEmployees provide all Employees to controller
func (e *EmployeProvider) GetEmployees() (list [](*entity.Employe), err error) {
	db, err := db.Init()
	defer db.Close()

	list, err = e.mapper.Select(db)
	return list, err
}

//GetEmploye provide selected Employe to controller
/*func (e *EmployeProvider) GetEmploye(id string) (*entity.Employe, error) {
	db, err := db.Init()
	defer db.Close()

	list, err := e.mapper.SelectByID(db, id)
	return list, err
}*/
