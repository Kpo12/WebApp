package employeprovider

import (
	entity "WebApp/app/entities"
	mapper "WebApp/app/mappers"
	"database/sql"
	"log"

	_ "github.com/lib/pq" //postgres driver
)

//EmployeProvider for Employe entity
type EmployeProvider struct {
}

//GetEmployees provide all Employees to controller
func (e *EmployeProvider) GetEmployees() (list [](*entity.Employe), err error) {

	connStr := "postgresql://postgres:225@localhost/appDB?sslmode=disable"
	db, err := sql.Open("postgres", connStr)
	if err != nil {
		log.Fatal("111", err)
	}
	defer db.Close()

	s := new(mapper.EmployeMapper)
	list, err = s.Select(db)
	return list, err
}

//GetEmploye provide selected Employe to controller
func (e *EmployeProvider) GetEmploye(id string) (list *entity.Employe, err error) {

	connStr := "postgresql://postgres:225@localhost/appDB?sslmode=disable"
	db, err := sql.Open("postgres", connStr)
	if err != nil {
		log.Fatal("111", err)
	}
	defer db.Close()

	s := new(mapper.EmployeMapper)
	list, err = s.SelectByID(db, id)
	return list, err
}
