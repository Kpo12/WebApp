package employemapper

import (
	entity "WebApp/app/entities"
	"database/sql"
	"log"

	_ "github.com/lib/pq" //postgress driver
)

//EmployeMapper , why not?
type EmployeMapper struct {
}

//Select all employee from DB
func (s *EmployeMapper) Select(db *sql.DB) (strList [](*entity.Employe), err error) {

	rows, err := db.Query("SELECT * FROM employe")
	if err != nil {
		log.Fatal(err)
	}
	defer rows.Close()

	strList = make([](*entity.Employe), 0)
	for rows.Next() {
		e := new(entity.Employe)
		err := rows.Scan(&e.ID, &e.Firstname, &e.Lastname, &e.Middlename, &e.Position)
		if err != nil {
			log.Fatal(err)
		}
		strList = append(strList, e)
	}
	if err = rows.Err(); err != nil {
		log.Fatal(err)
	}

	return strList, err
}
