package controllers

import (
	"fmt"

	"github.com/revel/revel"

	employeprovider "WebApp/app/providers/employeprovider"
)

//CShedule base controller
type CShedule struct {
	*revel.Controller
}

//GetTable list of all employees
func (c *CShedule) GetTable() revel.Result {

	list, err := employeprovider.GetEmployees()
	if err != nil {
		fmt.Println(err)
	}

	return c.RenderJSON(list)
}
