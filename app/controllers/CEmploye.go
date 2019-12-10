package controllers

import (
	"github.com/revel/revel"

	employeprovider "WebApp/app/providers/employeprovider"
)

//CEmploye base controller
type CEmploye struct {
	*revel.Controller
}

//Get list of all employees
func (c *CEmploye) Get() revel.Result {

	list := employeprovider.GetEmployees()

	return c.RenderJSON(list)
}
