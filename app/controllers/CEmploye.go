package controllers

import (
	empl "WebApp/app/providers/employeprovider"
	"fmt"

	"github.com/revel/revel"
)

//CEmploye base controller
type CEmploye struct {
	*revel.Controller
}

//Get list of all employees
func (c *CEmploye) Get() revel.Result {

	list, err := empl.GetEmployees()
	if err != nil {
		fmt.Println(err)
	}

	return c.RenderJSON(list)
}
