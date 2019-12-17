package controllers

import (
	provider "WebApp/app/providers/employeprovider"
	"WebApp/helpers"

	"github.com/revel/revel"
)

//CRealShedule base controller
type CRealShedule struct {
	*revel.Controller
	newProvider provider.EmployeProvider
}

//Get vvv
func (c *CRealShedule) Get() revel.Result {
	id := c.Params.Route.Get("id")

	/*if err != nil {
		helpers.Failed(err)
	}*/
	return c.RenderJSON(helpers.Success(id))
}

//Post vvv
func (c *CRealShedule) Post() revel.Result {
	id := c.Params.Route.Get("id")

	/*if err != nil {
		helpers.Failed(err)
	}*/
	return c.RenderJSON(helpers.Success(id))
}
