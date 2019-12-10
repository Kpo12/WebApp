package controllers

import (
	"github.com/revel/revel"

	employeprovider "WebApp/app/providers/employeprovider"
)

//CShedule base controller
type CShedule struct {
	*revel.Controller
}

//GetTable list of all employees
func (c *CShedule) GetTable() revel.Result {

	list := employeprovider.GetEmployees()

	return c.RenderJSON(list)
}
