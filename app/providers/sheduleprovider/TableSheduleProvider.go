package sheduleprovider

import (
	db "WebApp/app/db"
	entity "WebApp/app/entities"
	mapper "WebApp/app/mappers"
	"log"
)

//TableSheduleProvider for get planshedule for table view
type TableSheduleProvider struct {
	tableMapper mapper.TableSheduleMapper
}

//GetTableShedule for the employee
func (p *TableSheduleProvider) GetTableShedule() (map[string][](*entity.TableShedule), error) {
	db, err := db.Init()
	defer db.Close()

	days := []string{"monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"}

	elements := make(map[string][](*entity.TableShedule))

	for _, day := range days {
		sheduleList, err := p.tableMapper.SelectTableShedule(db, day)
		if err != nil {
			log.Println(err)
		}
		elements[day] = sheduleList
	}

	//elements["2019-12-12"] = sheduleList

	return elements, err
}
