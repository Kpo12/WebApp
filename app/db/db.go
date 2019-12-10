package db

import (
	"database/sql"
	"log"

	_ "github.com/lib/pq" //postgress driver?
)

func main() {
	db, err := sql.Open("postgres", "connString??")
	if err != nil {
		log.Fatal(err)
	}

	defer db.Close()
}
