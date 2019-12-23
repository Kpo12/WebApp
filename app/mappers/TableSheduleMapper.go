package mappers

import (
	entity "WebApp/app/entities"
	"database/sql"
	"log"
)

//TableSheduleMapper for get and set planshedule
type TableSheduleMapper struct {
}

//SelectTableShedule planned shedule for week(except events)
func (e *TableSheduleMapper) SelectTableShedule(db *sql.DB, day string) ([](*entity.TableShedule), error) {
	var (
		dbID         sql.NullInt64
		dbFirstName  sql.NullString
		dbLastName   sql.NullString
		dbMiddleName sql.NullString
		dbEmployeID  sql.NullInt64
		dbStart      sql.NullString
		dbEnd        sql.NullString
		dbWeekday    sql.NullString
	)

	query := `SELECT fk_employe, c_lastname, c_firstname, c_middlename,
		t_planshedule.c_id, c_start, c_end, c_weekday from t_planshedule
		INNER JOIN toc_employe_planshedule
		ON (t_planshedule.c_id = toc_employe_planshedule.fk_planshedule)
		INNER JOIN t_employe
		ON (t_employe.c_id = fk_employe)
		WHERE c_weekday = $1`
	rows, err := db.Query(query, day)
	if err != nil {
		log.Println(err)
	}
	defer rows.Close()

	tabList := make([](*entity.TableShedule), 0)
	for rows.Next() {
		err := rows.Scan(&dbEmployeID, &dbFirstName, &dbLastName, &dbMiddleName, &dbID, &dbStart, &dbEnd, &dbWeekday)
		if err != nil {
			log.Println(err)
		}
		currentShedule := &entity.TableShedule{
			ID:         dbID.Int64,
			FirstName:  dbFirstName.String,
			LastName:   dbLastName.String,
			MiddleName: dbMiddleName.String,
			EmployeID:  dbEmployeID.Int64,
			Start:      dbStart.String,
			End:        dbEnd.String,
			Weekday:    dbWeekday.String,
		}
		tabList = append(tabList, currentShedule)
	}
	if err = rows.Err(); err != nil {
		log.Println(err)
	}

	return tabList, err
}
