package controllers

import (
	entity "WebApp/app/entities"
	provider "WebApp/app/providers/sheduleprovider"
	"WebApp/helpers"

	"github.com/revel/revel"
)

//CPlanShedule base controller
type CPlanShedule struct {
	*revel.Controller
	provider provider.PlanSheduleProvider
}

//Get list of weekshedule for one Employe
func (c *CPlanShedule) Get() revel.Result {
	id := c.Params.Route.Get("id")

	emplList, err := c.provider.GetShedule(id)
	if err != nil {
		helpers.Failed(err)
	}
	return c.RenderJSON(helpers.Success(emplList))
}

//Post or Put(if exist) weekshedule for one Employe
func (c *CPlanShedule) Post() revel.Result {

	shed := new([](*entity.PlanShedule))
	c.Params.BindJSON(&shed)

	return c.RenderJSON(shed)
}
