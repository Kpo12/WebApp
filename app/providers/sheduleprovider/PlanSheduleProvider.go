package sheduleprovider

import (
	"WebApp/app/db"
	"WebApp/app/entities"
	entity "WebApp/app/entities"
	mapper "WebApp/app/mappers"
)

//PlanSheduleProvider ...
type PlanSheduleProvider struct {
	sheduleMapper mapper.PlanSheduleMapper
	eventMapper   mapper.EventMapper
}

//GetShedule load plan shedule and events for one employee
func (p *PlanSheduleProvider) GetShedule(id string) (*(entity.GeneralPlanShedule), error) {
	db, err := db.Init()
	defer db.Close()

	sheduleList, err := p.sheduleMapper.SelectShedule(db, id)
	eventList, err := p.eventMapper.SelectEvents(db, id)
	NewShedule := &entity.GeneralPlanShedule{
		Shedule: sheduleList,
		Events:  eventList,
	}

	return NewShedule, err
}

//CreateShedule for one employee
func (p *PlanSheduleProvider) CreateShedule(shed []*entities.PlanShedule, id string) ([](*entity.PlanShedule), error) {
	db, err := db.Init()
	defer db.Close()

	list, err := p.sheduleMapper.InsertShedule(db, shed, id)
	return list, err
}
