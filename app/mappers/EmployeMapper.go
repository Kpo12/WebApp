package mappers

import (
	entity "WebApp/app/entities"
	"database/sql"
	"log"
)

//EmployeMapper , why not?
type EmployeMapper struct {
}

//Select all employees from DB
func (e *EmployeMapper) Select(db *sql.DB) ([](*entity.Employe), error) {
	var (
		dbID         sql.NullInt64
		dbFirstName  sql.NullString
		dbLastName   sql.NullString
		dbMiddleName sql.NullString
		dbPosition   sql.NullString
	)

	query := "SELECT id, firstname, lastname, middlename, position FROM employe"
	rows, err := db.Query(query)
	if err != nil {
		log.Println(err)
	}
	defer rows.Close()

	emplList := make([](*entity.Employe), 0)
	for rows.Next() {
		err := rows.Scan(&dbID, &dbFirstName, &dbLastName, &dbMiddleName, &dbPosition)
		if err != nil {
			log.Println(err)
		}
		currentEmploye := &entity.Employe{
			ID:         dbID.Int64,
			Firstname:  dbFirstName.String,
			Lastname:   dbLastName.String,
			Middlename: dbMiddleName.String,
			Position:   dbPosition.String,
		}
		emplList = append(emplList, currentEmploye)
	}
	if err = rows.Err(); err != nil {
		log.Println(err)
	}

	return emplList, err
}

//SelectByID select Employe by ID
func (e *EmployeMapper) SelectByID(db *sql.DB, id string) (*entity.Employe, error) {
	var (
		dbID         sql.NullInt64
		dbFirstName  sql.NullString
		dbLastName   sql.NullString
		dbMiddleName sql.NullString
		dbPosition   sql.NullString
	)

	query := `SELECT id, firstname,lastname, middlename, position FROM employe WHERE id = $1`
	row := db.QueryRow(query, id)
	err := row.Scan(&dbID, &dbFirstName, &dbLastName, &dbMiddleName, &dbPosition)

	currentEmploye := &entity.Employe{
		ID:         dbID.Int64,
		Firstname:  dbFirstName.String,
		Lastname:   dbLastName.String,
		Middlename: dbMiddleName.String,
		Position:   dbPosition.String,
	}

	return currentEmploye, err
}
