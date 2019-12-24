package sheduleprovider

import (
	db "WebApp/app/db"
	"WebApp/app/entities"
	entity "WebApp/app/entities"
	mapper "WebApp/app/mappers"
)

//PlanSheduleProvider for get and set planshedule
type PlanSheduleProvider struct {
	sheduleMapper mapper.PlanSheduleMapper
	eventMapper   mapper.EventMapper
}

//GetShedule for the employee
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

//CreateShedule for the employee
func (p *PlanSheduleProvider) CreateShedule(shed []*entities.PlanShedule, id string) ([](*entity.PlanShedule), error) {
	db, err := db.Init()
	defer db.Close()

	list, err := p.sheduleMapper.InsertShedule(db, shed, id)
	return list, err
}
