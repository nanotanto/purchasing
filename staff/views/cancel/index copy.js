define([
    "views/cancel/detail"
], 
function(detail) {
    
    var url = window.location.protocol +"//"+ window.location.hostname+ ":" +window.location.port + window.location.pathname;

    var ui = {
        "rows": [
            {"cols":    [                    
                    {"width": 0,"rows": [                          
                            {"height": 30,
                            "cols": [
                                {id:"option","label": "Options","value": "One","options": ["Reguler","Service","Trial"],"view": "radio","height": 0,"width": 0,"labelAlign": "center"},
                                {view:"button", label: "Filter Data", popup:"my_pop", "width": 150}, 
                                {view: "button", label: "Download Data","width": 150, inputHeight: 30, click: function() {webix.toExcel($$("table"));}},
                                {view: "label", label: "", width: 20}
                                    ]
                            },
    
                            {"url": url+"../backend/lumen/public/catalogCancel",
                                "columns": [
                                    { id:"detail", header:"Action", width:55, template:"<a class='detail' href='#!/app/cancel.index'>Detail</a>"},
                                    {"id": "status","header":[{text:"Status", css:{"text-align":"center"} },{content:"textFilter"}],"sort": "string",width:80},
                                    {"id": "vendor_type","header": [{text:"Vendor Type", css:{"text-align":"center"} },{content:"textFilter"}],"sort": "string",width:80},
                                    {"id": "jenis_kode","header": [{text:"Jenis Kode", css:{"text-align":"center"} },{content:"textFilter"}],"sort": "string",width:110},
                                    {"id": "part_number","header":[{text:"Part No", css:{"text-align":"center"} },{content:"textFilter"}],"sort": "string",width:120},
                                    {"id": "draft_no","header":[{text:"Draft No", css:{"text-align":"center"} },{content:"textFilter"}],"sort": "string",width:80},
                                    {"id": "part_name","header":[{text:"Part Name", css:{"text-align":"center"} },{content:"textFilter"}],"sort": "string"},
                                    {"id": "size","header":[{text:"Size", css:{"text-align":"center"} },{content:"textFilter"}],"sort": "string"},
                                    {"id": "color","header":[{text:"Color", css:{"text-align":"center"} },{content:"textFilter"}],"sort": "string",width:90},
                                    {"id": "brand","header":[{text:"Brand", css:{"text-align":"center"} },{content:"textFilter"}],"sort": "string"},
                                    {"id": "type_name","header":[{text:"Type", css:{"text-align":"center"} },{content:"textFilter"}],"sort": "string"},
                                    {"id": "hs_code","header": [{text:"HS Code", css:{"text-align":"center"} },{content:"textFilter"}],"sort": "string",width:100},
                                    {"id": "uom_cons","header": [{text:"Uom Consumption", css:{"text-align":"center"} },{content:"textFilter"}],"sort": "string",width:130},
                                    {"id": "uom_purch","header": [{text:"Uom Purchasing", css:{"text-align":"center"} },{content:"textFilter"}],"sort": "string",width:120},
                                    {"id": "minimal_order","header": [{text:"Min Order", css:{"text-align":"center"} },{content:"textFilter"}],"sort": "string",width:80},
                                    {"id": "standar_packing","header": [{text:"Standar Pack", css:{"text-align":"center"} },{content:"textFilter"}],"sort": "string",width:100},
                                    {"id": "vendor_ref","header": [{text:"Vendor Referensi", css:{"text-align":"center"} },{content:"textFilter"}],"sort": "string"},
                                    {"id": "kode_ref","header": [{text:"Vendor Kode Referensi", css:{"text-align":"center"} },{content:"textFilter"}],"sort": "string"},
                                    {"id": "curr_ref","header": [{text:"Curr", css:{"text-align":"center"} },{content:"textFilter"}],"sort": "string",width:60},
                                    {"id": "price_ref","header": [{text:"Price Referensi", css:{"text-align":"center"} },{content:"textFilter"}],"sort": "string"},
                                    {"id": "nego_ref","header": [{text:"Nego Referensi", css:{"text-align":"center"} },{content:"textFilter"}],"sort": "string"},
                                    {"id": "Quotation","header": [{text:"Quotation no", css:{"text-align":"center"} },{content:"textFilter"}],"sort": "string"},
                                    {"id": "vendor_komp","header": [{text:"Vendor Komparasi", css:{"text-align":"center"} },{content:"textFilter"}],"sort": "string"},
                                    {"id": "kode_komp","header": [{text:"Vendor Kode Komparasi", css:{"text-align":"center"} },{content:"textFilter"}],"sort": "string"},
                                    {"id": "curr_komp","header": [{text:"Curr", css:{"text-align":"center"} },{content:"textFilter"}],"sort": "string",width:60},
                                    {"id": "price_komp","header": [{text:"Price Komparasi", css:{"text-align":"center"} },{content:"textFilter"}],"sort": "string"},
                                    {"id": "nego_komp","header": [{text:"Nego Komparasi", css:{"text-align":"center"} },{content:"textFilter"}],"sort": "string"},
                                    {"id": "category","header":[{text:"Category", css:{"text-align":"center"} },{content:"textFilter"}],"sort": "string",width:110},  
                                    {"id": "product_id","header":[{text:"Product Group", css:{"text-align":"center"} },{content:"textFilter"}],"sort": "string",width:110},
                                    {"id": "sub_id","header":[{text:"Sub Group", css:{"text-align":"center"} },{content:"textFilter"}],"sort": "string",width:110},
                                    {"id": "wh_lokasi","header":[{text:"WH Lokasi", css:{"text-align":"center"} },{content:"textFilter"}],"sort": "string",width:80},
                                    {"id": "request_date","header": [{text:"Request Date", css:{"text-align":"center"} },{content:"textFilter"}],"sort": "string",width:110},
                                    {"id": "updated_at","header": [{text:"Cancel Date", css:{"text-align":"center"} },{content:"textFilter"}],"sort": "string",width:110, format:"%Y-%m-%d"},
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
                            this.$scope.show("cancel.index:id="+id);
                            
                            $$("myform").clear();					
    
                            $$("myform").load(url+"../backend/lumen/public/detail/"+id);
                            $$("tmp").load(url+"../backend/lumen/public/detail/"+id);
                        
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
				height:800,
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
            },
            {
                view:"popup",
                id:"my_pop",
                top:200, left:300,
                body:{
                    view:"form", scroll:false, id:"myform-4", width:320, elements:[
                      {id:"start", view:"datepicker", type:"date", label:"Start", name:"start", 
                       format: "%Y-%m-%d", stringResult: true },
                      {id:"end", view:"datepicker", type:"date", label:"End", name:"end",format:"%Y-%m-%d",
                       stringResult:true },
                      { view:"button", value:"Submit data", click:function(){
                          var start = $$("start").getValue();
                          var end = $$("end").getValue();
                       // this.$scope.show("katalog.index:start="+start+":end="+end);

                        $$("table").clearAll();  
                        $$("table").load(url+"../backend/lumen/public/catalogFilter?start="+start+"&end="+end);
                        webix.message("<pre>"+JSON.stringify(this.getParentView().getValues(),0,1)+"</pre>");
                      }}
                    ]
                  }
            }
            
		],
        $oninit: function(){
            $$("option").attachEvent("onItemClick", function(id, e){ 
                var ids =  this.getValue();
                $$("table").clearAll();
                $$("table").load(url+"../backend/lumen/public/option/"+ids)

			});

        }
    };

});

webix.i18n.parseFormat = "%Y-%m-%d";
webix.i18n.setLocale();