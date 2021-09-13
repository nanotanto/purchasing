define([      
	"views/cancel/table"
], function(table) {

    var url = window.location.protocol +"//"+ window.location.hostname+ ":" +window.location.port + window.location.pathname;

    var ui = {
        cols:[
            table            
        ]
    };

    return {
        $ui:ui
    };

});