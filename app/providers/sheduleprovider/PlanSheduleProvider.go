package sheduleprovider

import (
	db "WebApp/app/db"
	"WebApp/app/entities"
	mapper "WebApp/app/mappers"
)

//PlanSheduleProvider for get and set planshedule
type PlanSheduleProvider struct {
	shedileMapper mapper.PlanSheduleMapper
	eventMapper   mapper.EventMapper
}

//GeneralShedule , why not?
type GeneralShedule struct {
	Shedule [](*entities.PlanShedule) `json:"shedule"`
	Events  [](*entities.Event)       `json:"events"`
}

//GetShedule for the employee
func (p *PlanSheduleProvider) GetShedule(id string) (*GeneralShedule, error) {
	db, err := db.Init()
	defer db.Close()

	sheduleList, err := p.shedileMapper.SelectShedule(db, id)
	eventList, err := p.eventMapper.SelectEvents(db, id)
	NewShedule := &GeneralShedule{
		Shedule: sheduleList,
		Events:  eventList,
	}

	return NewShedule, err
}

//CreateShedule for the employee
func (p *PlanSheduleProvider) CreateShedule(shed []*entities.PlanShedule, id string) error {
	db, err := db.Init()
	defer db.Close()

	err = p.shedileMapper.InsertShedule(db, shed, id)
	//fmt.Println(shed[0])
	return err
}
