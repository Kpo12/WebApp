package sheduleprovider

import (
	db "WebApp/app/db"
	"WebApp/app/entities"
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

//CreateShedule for the employee
func (p *PlanSheduleProvider) CreateShedule(shed []*entities.PlanShedule, id string) error {
	db, err := db.Init()
	defer db.Close()

	err = p.mapper.InsertShedule(db, shed, id)
	//fmt.Println(shed[0])
	return err
}
