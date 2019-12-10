package employemapper

import (
	"database/sql"
	"fmt"
	"log"

	_ "github.com/lib/pq" //postgress driver?
)

//EmployeMapper 111
type EmployeMapper struct {
}

//Select all employee from DB
func (c *EmployeMapper) Select() {

	db, err := sql.Open("postgres", "connString??")
	if err != nil {
		log.Fatal(err)
	}
	defer db.Close()

	fmt.Println("ez")
}
