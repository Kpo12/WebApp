package controllers

import (
	"github.com/revel/revel"
)

//CPlanShedule base controller
type CPlanShedule struct {
	*revel.Controller
}

//Get list of weekshedule for one Employe
func (c *CPlanShedule) Get() revel.Result {

	/*list, err :=
	if err != nil {
		helpers.Failed(err)
	}*/

	return c.Render( /*helpers.Success(list)*/ ) //Dont forget use renderJSON!!!
}
