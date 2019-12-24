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

//Get list of palannedshedule and events for one Employe
func (c *CPlanShedule) Get() revel.Result {
	id := c.Params.Route.Get("id")

	list, err := c.provider.GetShedule(id)
	if err != nil {
		helpers.Failed(err)
	}
	return c.RenderJSON(helpers.Success(list))
}

//Post new weekshedule for one Employe
func (c *CPlanShedule) Post() revel.Result {
	id := c.Params.Route.Get("id")

	shed := make([](*entity.PlanShedule), 0)
	c.Params.BindJSON(&shed)

	list, err := c.provider.CreateShedule(shed, id)
	if err != nil {
		helpers.Failed(err)
	}

	return c.RenderJSON(helpers.Success(list))
}

//Put update existing weekshedule for one Employe
/*func (c *CPlanShedule) Put() revel.Result {

}*/
