/*
	App configuration
*/

define([
	"../frontend/libs/webix-mvc-core/core",
	"../frontend/libs/webix-mvc-core/plugins/menu",
	"plugins/user"
], function(
	core, menu, user
){

	//configuration
	var app = core.create({
		id:			"qhse", //change this line!
		name:		"Purchasing Information System",
		version:	"1.0",
		debug:		true,
		start:		"/app/register.index"
	});

	app.use(menu);

	// This enables user-control (login)
	app.use(user);


	return app;
});
