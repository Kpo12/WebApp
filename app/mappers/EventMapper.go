package mappers

import (
	entity "WebApp/app/entities"
	"database/sql"
	"fmt"
	"log"
)

//EventMapper select, create and delete shedule events
type EventMapper struct {
}

//SelectEvents get all events for target employe
func (e *EventMapper) SelectEvents(db *sql.DB, id string) ([](*entity.Event), error) {
	var (
		dbID    sql.NullInt64
		dbStart sql.NullString
		dbEnd   sql.NullString
		dbDate  sql.NullString
	)

	query := `SELECT c_id, c_start, c_end, c_date FROM t_event
	INNER JOIN toc_employe_event
	ON (t_event.c_id = toc_employe_event.fk_event)
	WHERE fk_employe = $1`
	rows, err := db.Query(query, id)
	if err != nil {
		log.Println(err)
	}
	defer rows.Close()

	eventList := make([](*entity.Event), 0)
	for rows.Next() {
		err := rows.Scan(&dbID, &dbStart, &dbEnd, &dbDate)
		if err != nil {
			log.Println(err)
		}
		currentEvent := &entity.Event{
			ID:    dbID.Int64,
			Start: dbStart.String,
			End:   dbEnd.String,
			Date:  dbDate.String,
		}
		eventList = append(eventList, currentEvent)
	}
	if err = rows.Err(); err != nil {
		log.Println(err)
	}

	return eventList, err
}

//InsertEvent for current employe
func (e *EventMapper) InsertEvent(db *sql.DB, id string, Event *entity.Event) error {
	query := `INSERT INTO event (c_id, c_start, c_end, c_date) 
	VALUES  (nextval('event_id_seq'), $1, $2, $3) RETURNING c_id`

	var eventID int64
	err := db.QueryRow(query, Event.Start, Event.End, Event.Date).Scan(&eventID)
	if err != nil {
		fmt.Println(err)
	}
	fmt.Println(eventID)
	fmt.Println(id)

	ToCquery := `INSERT INTO toc_employe_event (fk_employe, fk_event) VALUES ($1, $2)`
	_, err = db.Exec(ToCquery, id, eventID)
	if err != nil {
		fmt.Println(err)
	}

	return err
}

//DeleteEvent for current employe
func (e *EventMapper) DeleteEvent() {

}
