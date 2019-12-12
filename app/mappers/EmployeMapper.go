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

//Select all employees from DB
func (s *EmployeMapper) Select(db *sql.DB) ([](*entity.Employe), error) {
	var (
		dbID         sql.NullInt64
		dbFirstName  sql.NullString
		dbLastName   sql.NullString
		dbMiddleName sql.NullString
		dbPosition   sql.NullString
	)
	rows, err := db.Query("SELECT id, firstname,lastname, middlename, position FROM employe")
	if err != nil {
		log.Fatal(err)
	}
	defer rows.Close()

	emplList := make([](*entity.Employe), 0)
	for rows.Next() {
		err := rows.Scan(&dbID, &dbFirstName, &dbLastName, &dbMiddleName, &dbPosition)
		if err != nil {
			log.Fatal(err)
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
		log.Fatal(err)
	}

	return emplList, err
}

//SelectByID select Employe by ID
func (s *EmployeMapper) SelectByID(db *sql.DB, id string) (*entity.Employe, error) {

	empl := new(entity.Employe)
	query := `SELECT id, firstname,lastname, middlename, position FROM employe WHERE id = $1`
	row := db.QueryRow(query, id)
	err := row.Scan(&empl.ID, &empl.Firstname, &empl.Lastname, &empl.Middlename, &empl.Position)

	return empl, err
}
