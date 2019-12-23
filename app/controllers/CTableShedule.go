package controllers

import (
	provider "WebApp/app/providers/sheduleprovider"
	"WebApp/helpers"

	"github.com/revel/revel"
)

//CTableShedule base controller
type CTableShedule struct {
	*revel.Controller
	provider provider.TableSheduleProvider
}

//Get ...
func (c *CTableShedule) Get() revel.Result {

	list, err := c.provider.GetTableShedule()
	if err != nil {
		helpers.Failed(err)
	}
	return c.RenderJSON(helpers.Success(list))
}
