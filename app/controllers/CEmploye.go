package controllers

import (
	provider "WebApp/app/providers/employeprovider"
	"WebApp/helpers"

	"github.com/revel/revel"
)

//CEmploye base controller
type CEmploye struct {
	*revel.Controller
}

//Get list of all employees
func (c *CEmploye) Get() revel.Result {
	e := new(provider.EmployeProvider)
	emplList, err := e.GetEmployees()
	if err != nil {
		helpers.Failed(err)
	}
	return c.RenderJSON(helpers.Success(emplList))
}

//GetByID one Employe object
func (c *CEmploye) GetByID() revel.Result {
	id := c.Params.Route.Get("id")

	e := new(provider.EmployeProvider)
	empl, err := e.GetEmploye(id)
	if err != nil {
		helpers.Failed(err)
	}
	return c.RenderJSON(helpers.Success(empl))
}
