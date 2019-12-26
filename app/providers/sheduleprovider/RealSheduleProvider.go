package sheduleprovider

import (
	db "WebApp/app/db"
	entity "WebApp/app/entities"
	mapper "WebApp/app/mappers"
	"fmt"
	"log"
)

//RealSheduleProvider ...
type RealSheduleProvider struct {
	mapper mapper.RealSheduleMapper
}

//LoadShedule load real shedule in selected date range(if exist)
func (r *RealSheduleProvider) LoadShedule(shed *[]string) (map[string][](*entity.RealShedule), error) {
	db, err := db.Init()
	defer db.Close()
	res := make(map[string][](*entity.RealShedule))
	for _, d := range *shed {
		//currDate, err := time.Parse("2006-01-02", d)
		if err != nil {
			log.Println(err)
		}
		fmt.Println(d)
		existShed, err := r.mapper.SelectShedule(db, d)
		if err != nil {
			log.Println(err)
		}
		/*if len(existShed) == 0 {
			fmt.Println("Запрашиваем постоянное")

		}*/
		res[d] = existShed

	}

	return res, err
}
