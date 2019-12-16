package sheduleprovider

import (
	db "WebApp/app/db"
	entity "WebApp/app/entities"
	mapper "WebApp/app/mappers"
)

//PlanSheduleProvider for get and set planshedule
type PlanSheduleProvider struct {
	mapper mapper.PlanSheduleMapper
}

//GetShedule for the employee
func (p *PlanSheduleProvider) GetShedule(id string) ([](*entity.PlanShedule), error) {
	db, err := db.Init()
	defer db.Close()

	list, err := p.mapper.SelectShedule(db, id)
	return list, err
}

//UpdateShedule for the employee
func (p *PlanSheduleProvider) UpdateShedule(id string) {

}
