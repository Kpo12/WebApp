package controllers

import (
	provider "WebApp/app/providers/sheduleprovider"
	"WebApp/helpers"

	"github.com/revel/revel"
)

//CRealShedule base controller
type CRealShedule struct {
	*revel.Controller
	provider provider.RealSheduleProvider
}

//Post new weekshedule for one Employe
func (c *CRealShedule) Post() revel.Result {

	shed := make([]string, 0)
	c.Params.BindJSON(&shed)

	res, err := c.provider.LoadShedule(&shed)
	if err != nil {
		helpers.Failed(err)
	}

	return c.RenderJSON(helpers.Success(res))
}
