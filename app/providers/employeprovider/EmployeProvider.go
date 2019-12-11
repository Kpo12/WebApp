package employeprovider

import (
	"database/sql"
	"fmt"
	"log"
	"os"

	_ "github.com/lib/pq" //a
)

type Employe struct {
	ID         int64
	Firstname  string
	Lastname   string
	Middlename string
	Password   string
}

//GetEmployees provide Employe to controller
func GetEmployees() (list []*Employe, err error) {
	//connStr := "user=user dbname=appDB sslmode=disable encrypt=disable"

	db, err := sql.Open("postgres", "postgresql://postgres:225@localhost/appDB?sslmode=disable")
	if err != nil {
		log.Fatal("111", err)
	}

	rows, err := db.Query("SELECT * FROM employe")
	if err != nil {
		fmt.Println("222", err)
		os.Exit(3)
	}
	defer rows.Close()

	list = make([]*Employe, 0)
	for rows.Next() {
		e := new(Employe)
		err := rows.Scan(&e.ID, &e.Firstname, &e.Lastname, &e.Middlename, &e.Password)
		if err != nil {
			log.Fatal("333", err)
		}
		list = append(list, e)
	}
	if err = rows.Err(); err != nil {
		log.Fatal("444", err)
	}

	/*empl := new(empl.EmployeMapper)
	empl.Select(*db)*/
	return list, err
}
