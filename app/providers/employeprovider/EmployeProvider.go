package employeprovider

import (
	//empl "WebApp/app/mappers"
	"database/sql"
	"log"
)

//GetEmployees provide Employe to controller
func GetEmployees() {

	db, err := sql.Open("postgres", "connString??")
	if err != nil {
		log.Fatal(err)
	}
	defer db.Close()

}
