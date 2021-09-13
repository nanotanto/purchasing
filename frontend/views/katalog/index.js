define([
    "views/katalog/detail"
], 
function(detail) {
	
	    
    var url = window.location.protocol +"//"+ window.location.hostname+ ":" +window.location.port + window.location.pathname;

    var ui = {
        "rows": [
            {"cols":    [                    
                    {"width": 0,"rows": [                          
                            {"height": 30,
                            "cols": [
                                {id:"option","label": "Options","value": "One","options": ["Reguler","Service","Trial"],"view": "radio","height": 0,"width": 0,"labelAlign": "center"}
                                    ]
                            },
    
                            {"url": url+"backend/lumen/public/catalog",
                            scheme:{
                                $init:function(row){
                                    row.category_id = (row.category || "") && row.category.name
                                    row.uom_id = (row.uom || "") && row.uom.name
                                    row.uompurch_id = (row.uompurch || "") && row.uompurch.name
                                    
                                }
                            },
                                "columns": [
                                    { id:"detail", header:"Action", width:55, template:"<a class='detail' href='#!/app/katalog.index'>Detail</a>"},
                                    {"id": "user","header":[{text:"User Name", css:{"text-align":"center"} },{content:"serverFilter"}],"sort": "server",width:100},
                                    {"id": "status","header":[{text:"Status", css:{"text-align":"center"} },{content:"serverFilter"}],"sort": "server",width:80},
                                    {"id": "jenis_kode","header": [{text:"Jenis Kode", css:{"text-align":"center"} },{content:"serverFilter"}],"sort": "server",width:110},
                                    {"id": "vendor_type","header": [{text:"Vendor Type", css:{"text-align":"center"} },{content:"serverFilter"}],"sort": "server",width:93},
                                    {"id": "part_number","header":[{text:"Part No", css:{"text-align":"center"} },{content:"serverFilter"}],"sort": "server",width:120},
                                    {"id": "draft_no","header":[{text:"Draft No", css:{"text-align":"center"} },{content:"serverFilter"}],"sort": "server",width:80},
                                    {"id": "part_name","header":[{text:"Part Name", css:{"text-align":"center"} },{content:"serverFilter"}],"sort": "server"},
                                    {"id": "size","header":[{text:"Size", css:{"text-align":"center"} },{content:"serverFilter"}],"sort": "server"},
                                    {"id": "color","header":[{text:"Color", css:{"text-align":"center"} },{content:"serverFilter"}],"sort": "server",width:80},
                                    {"id": "brand","header":[{text:"Brand", css:{"text-align":"center"} },{content:"serverFilter"}],"sort": "server"},
                                    {"id": "type_name","header": [{text:"Type", css:{"text-align":"center"} },{content:"serverFilter"}],"sort": "server"},
                                    {"id": "category_id","header":[{text:"Category", css:{"text-align":"center"} },{content:"serverFilter"}],"sort": "server",width:110},
                                    {"id": "uom_id","header": [{text:"Uom Consumption", css:{"text-align":"center"} },{content:"serverFilter"}],"sort": "server",width:130},
                                    {"id": "uompurch_id","header": [{text:"Uom Purchasing", css:{"text-align":"center"} },{content:"serverFilter"}],"sort": "server",width:120},
                                    {"id": "wh_lokasi","header":[{text:"WH Lokasi", css:{"text-align":"center"} },{content:"serverFilter"}],"sort": "server",width:80},
                                    {"id": "ref_reguler","header":[{text:"Ref. Kode Reguler", css:{"text-align":"center"} },{content:"serverFilter"}],"sort": "server"},
                                    {"id": "ref_trial","header":[{text:"Ref. Kode Trial", css:{"text-align":"center"} },{content:"serverFilter"}],"sort": "server",width:100},
                                    {"id": "request_date","header": [{text:"Request Date", css:{"text-align":"center"} },{content:"serverFilter"}],"sort": "server",width:110},
                                    {"id": "submit_date","header": [{text:"Submit Date", css:{"text-align":"center"} },{content:"serverFilter"}],"sort": "server",width:110},
                                    {"id": "yimm_date","header": [{text:"Approval YIMM date", css:{"text-align":"center"} },{content:"serverFilter"}],"sort": "server",width:110},
                                    {"id": "price_date","header": [{text:"Submit Price Date", css:{"text-align":"center"} },{content:"serverFilter"}],"sort": "server",width:110},
                                    {"id": "activation_date","header": [{text:"Activation Date", css:{"text-align":"center"} },{content:"serverFilter"}],"sort": "server",width:110},
                                           ],
                                id:"table",
                                "view": "datatable",
                                "borderless": 1,
                                "columnWidth": 140,
                                "multiselect": true,
                                "resizeColumn": true,
                                "resizeRow": true,
                                "areaselect": true,
                                //"height": 820,
                                "dragColumn": true,
                                "clipboard": "custom",
                                "blockselect": "select",
                                "dragscroll": true,
                                "scrollAlignY": true,
                                "scrollX": true,
                                "scrollY": true,
                                "select": true,
                                "editMath": true,
                                "editable": true,
                                "scroll": "xy",
                                //"autowidth": true
                                
                                onClick:{ 
                                    "detail":function(e, id, trg){
                                        //this.$scope.show("detail:id="+id);
                                        this.$scope.show("katalog.index:id="+id);
                                        
                                        $$("myform").clear();					
                
                                        $$("myform").load(url+"backend/lumen/public/detail/"+id);
                                        $$("tmp").load(url+"backend/lumen/public/detail/"+id);
                                    
                                        $$('win1').show();
                
                                        $$("table").disable();
                                    },
                                    },
                            }
                        ]
                    }
                ]
            }
        ]
    };

    return {
        $ui:ui,
        $windows:[
			{
				view:"window",
				id:"win1",
				width:900,
				height:650,
				position:"center",
				head:{
					view:"toolbar", margin:-4, cols:[
						{view:"label", label: "<center>Detail Information</center>" },
						{view:"icon", icon:"fa fa-window-close", css:"alter", click: function(){
							$$('win1').hide();	
							$$("table").enable();					
						}
					}
				]
				},
				body:detail
			}
		],
        $oninit: function(){
            $$("option").attachEvent("onItemClick", function(id, e){ 
                var ids =  this.getValue();
                $$("table").clearAll();
                $$("table").load(url+"backend/lumen/public/option/"+ids)

			});

        }
    };

});

