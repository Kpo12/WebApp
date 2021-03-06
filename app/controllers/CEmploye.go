package controllers

import (
	provider "WebApp/app/providers/employeprovider"
	"WebApp/helpers"

	"github.com/revel/revel"
)

//CEmploye base controller
type CEmploye struct {
	*revel.Controller
	newProvider provider.EmployeProvider
}

//Get list of all employees
func (c *CEmploye) Get() revel.Result {

	emplList, err := c.newProvider.GetEmployees()
	if err != nil {
		helpers.Failed(err)
	}
	return c.RenderJSON(helpers.Success(emplList))
}
