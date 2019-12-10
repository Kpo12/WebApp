package controllers

import (
	"fmt"

	"github.com/revel/revel"

	employeprovider "WebApp/app/providers/employeprovider"
)

//CEmploye base controller
type CEmploye struct {
	*revel.Controller
}

//Get list of all employees
func (c *CEmploye) Get() revel.Result {

	list, err := employeprovider.GetEmployees()
	if err != nil {
		fmt.Println(err)
	}

	return c.RenderJSON(list)
}
