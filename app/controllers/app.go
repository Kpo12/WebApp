package controllers

import (
	"github.com/revel/revel"
)

//App ddss
type App struct {
	*revel.Controller
}

//Index ddss
func (c App) Index() revel.Result {
	return c.Render()
}

//Hello ddss
func (c App) Hello(myName string) revel.Result {
	return c.Render(myName)
}
