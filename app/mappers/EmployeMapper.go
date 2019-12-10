package employemapper

import (
	"fmt"

	_ "github.com/lib/pq" //postgress driver?
)

//EmployeMapper 111
type EmployeMapper struct {
}

//Select all employee from DB
func (s *EmployeMapper) Select() {

	fmt.Println("ez")

}
