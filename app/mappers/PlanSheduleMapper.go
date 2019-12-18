package mappers

import (
	entity "WebApp/app/entities"
	"database/sql"
	"fmt"
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
	query := `SELECT "id", "start", "end", "weekday" FROM "planshedule"
		INNER JOIN "employe_planshedule" 
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

//InsertShedule create planned shedule for week(except events)
func (e *PlanSheduleMapper) InsertShedule(db *sql.DB, shed [](*entity.PlanShedule), id string) error {

	query := `INSERT INTO planshedule ("id", "start", "end", "weekday") 
		VALUES  (nextval('planshedule_id_seq'), $1, $2, $3) RETURNING id`

	stmt, err := db.Prepare(query)
	if err != nil {
		fmt.Println(err)
	}
	defer stmt.Close()

	for _, plan := range shed {
		var shedID int64
		err := stmt.QueryRow(plan.Start, plan.End, plan.Weekday).Scan(&shedID)
		if err != nil {
			fmt.Println(err)
		}
		//fmt.Println(shedID)
		//fmt.Println(id)

		ToCquery := `INSERT INTO employe_planshedule (fk_employe, fk_planshedule) VALUES ($1, $2)`
		_, err = db.Exec(ToCquery, id, shedID)
		if err != nil {
			fmt.Println(err)
		}
	}
	return err
}
