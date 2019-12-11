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
func (s *EmployeMapper) Select(db sql.DB) {

	rows, err := db.Query("SELECT * FROM books")
	if err != nil {
		log.Fatal(err)
	}
	fmt.Println(rows)

}
