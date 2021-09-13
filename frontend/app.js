/*
	App configuration
*/

define([
	"libs/webix-mvc-core/core",
	"libs/webix-mvc-core/plugins/menu",
], function(
	core, menu
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



	return app;
});