define([   
    "views/edit/form",    
	"views/edit/table"
], function(form,table) {

    var url = window.location.protocol +"//"+ window.location.hostname+ ":" +window.location.port + window.location.pathname;

    var ui = {
        cols:[
            form, 
            table            
        ]
    };

    return {
        $ui:ui
    };

});