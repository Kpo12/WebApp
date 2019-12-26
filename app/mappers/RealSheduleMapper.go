package mappers

import (
	entity "WebApp/app/entities"
	"database/sql"
	"log"
)

//RealSheduleMapper select and update planned shedule for week(except events)
type RealSheduleMapper struct {
}

//SelectShedule planned shedule for week(except events)
func (e *RealSheduleMapper) SelectShedule(db *sql.DB, date string) ([](*entity.RealShedule), error) {
	var (
		dbID            sql.NullInt64
		dbStart         sql.NullString
		dbEnd           sql.NullString
		dbExpectedHours sql.NullInt64
		dbRealHours     sql.NullInt64
		dbEmployeID     sql.NullInt64
	)
	query := `SELECT t_realshedule.c_id, c_start, c_end,
		c_expectedhours, c_realhours, fk_employe FROM t_realshedule
		INNER JOIN t_day
		ON (t_realshedule.fk_day = t_day.c_id)
		INNER JOIN toc_employe_realshedule
		ON (t_realshedule.c_id = toc_employe_realshedule.fk_realshedule)
		WHERE t_day.c_date = $1::date;`
	rows, err := db.Query(query, date)
	//fmt.Println(date)
	if err != nil {
		log.Println(err)
	}
	defer rows.Close()

	shedList := make([](*entity.RealShedule), 0)
	for rows.Next() {
		err := rows.Scan(&dbID, &dbStart, &dbEnd, &dbExpectedHours, &dbRealHours, &dbEmployeID)
		if err != nil {
			log.Println(err)
		}
		currentShedule := &entity.RealShedule{
			ID:            dbID.Int64,
			Start:         dbStart.String,
			End:           dbEnd.String,
			ExpectedHours: dbExpectedHours.Int64,
			RealHours:     dbRealHours.Int64,
			EmployeID:     dbEmployeID.Int64,
		}
		shedList = append(shedList, currentShedule)
	}
	if err = rows.Err(); err != nil {
		log.Println(err)
	}

	return shedList, err
}
