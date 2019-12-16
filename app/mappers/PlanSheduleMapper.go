package mappers

import (
	entity "WebApp/app/entities"
	"database/sql"
	"log"
)

//PlanSheduleMapper select and update planned shedule for week(except events)
type PlanSheduleMapper struct {
}

//SelectShedule planned shedule for week(except events)
func (e *PlanSheduleMapper) SelectShedule(db *sql.DB, id string) ([](*entity.PlanShedule), error) {
	var (
		dbID      sql.NullInt64
		dbStart   sql.NullString
		dbEnd     sql.NullString
		dbWeekday sql.NullString
	)
	query := `SELECT "id", "start", "end", "weekday"
    	FROM "planshedule" INNER JOIN "employe_planshedule" 
		ON (planshedule.id = employe_planshedule.fk_planshedule)
		WHERE fk_employe = $1;`
	rows, err := db.Query(query, id)
	if err != nil {
		log.Println(err)
	}
	defer rows.Close()

	shedList := make([](*entity.PlanShedule), 0)
	for rows.Next() {
		err := rows.Scan(&dbID, &dbStart, &dbEnd, &dbWeekday)
		if err != nil {
			log.Println(err)
		}
		currentShedule := &entity.PlanShedule{
			ID:      dbID.Int64,
			Start:   dbStart.String,
			End:     dbEnd.String,
			Weekday: dbWeekday.String,
		}
		shedList = append(shedList, currentShedule)
	}
	if err = rows.Err(); err != nil {
		log.Println(err)
	}

	return shedList, err
}

//UpdateShedule update(if exist), or create planned shedule for week(except events)
func (e *PlanSheduleMapper) UpdateShedule(db *sql.DB, id string) {

}
