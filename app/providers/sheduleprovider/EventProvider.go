package sheduleprovider

import (
	db "WebApp/app/db"
	"WebApp/app/entities"
	mapper "WebApp/app/mappers"
)

//EventProvider create and delete shedule events
type EventProvider struct {
	mapper mapper.EventMapper
}

//CreateEvent ..
func (e *EventProvider) CreateEvent(event *entities.Event, id string) error {
	db, err := db.Init()
	defer db.Close()

	err = e.mapper.InsertEvent(db, id, event)
	return err
}
