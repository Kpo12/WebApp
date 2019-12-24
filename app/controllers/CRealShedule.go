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

//Post new weekshedule for one Employe
func (c *CRealShedule) Post() revel.Result {

	shed := make([]string, 0)
	c.Params.BindJSON(&shed)

	/*list, err := c.provider.CreateShedule(shed, id)
	if err != nil {
		helpers.Failed(err)
	}*/

	return c.RenderJSON(helpers.Success(shed))
}
