package db

import (
	"database/sql"

	_ "github.com/lib/pq" //postgress driver?
)

//Init open DB connection
func Init() (*sql.DB, error) {
	connStr := "postgresql://postgres:225@localhost/appDB?sslmode=disable"

	db, err := sql.Open("postgres", connStr)
	return db, err
}
