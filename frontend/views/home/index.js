define([], 
function() {
    var ui = {
        "cols": [
            {"rows": [
                    {"label": "Grafik All Kategori Pendaftaran New Part Master","view": "label","height": 38,"align": "center","borderless": true},
                    {"view": "chart","type": "spline","xAxis": {"template": "#value#","lines": false},"yAxis": {},"url": "demo->5f042ed11c5a070012ac942f","borderless": true},
                    {"view": "label","height": 24,"borderless": true},
                    {"height": 38,
                        "cols": [
                            {"label": "Kode Reguler","view": "label","height": 0,"borderless": true,"align": "center"},
                            {"label": "Kode Manual Trial","view": "label","height": 38,"borderless": true,"align": "center"},
                            {"label": "Kode Manual Service","view": "label","height": 38,"borderless": true,"align": "center"}
                        ]
                    },
                    {"height": 311,
                        "cols": [
                            {"url": "demo->5f042ed11c5a070012ac942f","type": "bar","xAxis": "#value#","yAxis": {},"view": "chart","borderless": true},
                            {"view": "chart","pieInnerText": "#value#","label": "#month#","url": "demo->5f042ed11c5a070012ac942f","height": 0,"borderless": true},
                            {"url": "demo->5f042ed11c5a070012ac942f","type": "bar","xAxis": "#value#","yAxis": {},"view": "chart","borderless": true}
                        ]
                    },
                    {"view": "label","height": 28,"borderless": true}
                ]
            }
        ]
    };
 

    return {
        $ui:ui
    };

});

var data = {
    "5f042ed11c5a070012ac942f": [
		{"id": 1,"value": 20,"label": "06","color": "#ee4339","month": "Jan"},
		{"id": 2,"value": 55,"label": "07","color": "#ee9336","month": "Feb"},
		{"id": 3,"value": 40,"label": "08","color": "#eed236","month": "Mar"},
		{"id": 4,"value": 78,"label": "09","color": "#d3ee36","month": "Apr"},
		{"id": 5,"value": 61,"label": "10","color": "#a7ee70","month": "May"},
		{"id": 6,"value": 35,"label": "11","color": "#58dccd","month": "Jun"},
		{"id": 7,"value": 80,"label": "12","color": "#36abee","month": "Jul"},
		{"id": 8,"value": 50,"label": "13","color": "#476cee","month": "Aug"},
		{"id": 9,"value": 65,"label": "14","color": "#a244ea","month": "Sep"},
		{"id": 10,"value": 59,"label": "15","color": "#e33fc7","month": "Oct"}
	],
};
webix.proxy.demo = {
	$proxy:true,
	load:function(view){
		if (view.count && view.count())
			view.clearAll();
		view.parse( webix.copy(data[this.source]||[]) );
	}
};
