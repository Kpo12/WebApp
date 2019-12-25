package controllers

import (
	"WebApp/app/entities"
	provider "WebApp/app/providers/sheduleprovider"
	"WebApp/helpers"

	"github.com/revel/revel"
)

//CEvent implements PostEvent and DeleteEvent actions
type CEvent struct {
	*revel.Controller
	provider provider.EventProvider
}

//PostEvent create new event
func (c *CEvent) PostEvent() revel.Result {
	id := c.Params.Route.Get("id")

	event := new(entities.Event)
	c.Params.BindJSON(&event)

	event, err := c.provider.CreateEvent(event, id)
	if err != nil {
		helpers.Failed(err)
	}

	return c.RenderJSON(helpers.Success(event))
}

//DeleteEvent ..
func (c *CEvent) DeleteEvent() revel.Result {
	id := c.Params.Route.Get("id")

	/*if err != nil {
		helpers.Failed(err)
	}*/
	return c.RenderJSON(helpers.Success(id))
}
