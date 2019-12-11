package controllers

import (
	provider "WebApp/app/providers/employeprovider"
	"log"

	"github.com/revel/revel"
)

//CEmploye base controller
type CEmploye struct {
	*revel.Controller
}

//Get list of all employees
func (c *CEmploye) Get() revel.Result {
	g := new(provider.EmployeProvider)
	emplList, err := g.GetEmployees()
	if err != nil {
		log.Fatal(err)
	}

	return c.RenderJSON(emplList)
}
