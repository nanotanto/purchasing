define([], function() {

    var url = window.location.protocol +"//"+ window.location.hostname+ ":" +window.location.port + window.location.pathname;
    
    return {
        $ui: {id:"myform_reg","autoheight": true,"view": "form","borderless": true,"width": 580,
        "elements": [
            //{view:"label",css:{'color':"gray",'font-weight':"bold",'font-size':"14px"},label:"Untuk pendaftaran kode baru silahkan di isi form berikut :"},
            {id:"id", name:"id", hidden:true, view:"text" },
            {"cols": [
                
                {"view": "text","label": "Draft No","name": "draft_no","height": 32,"labelWidth": 115,"placeholder": "","width": 225},
                {"view": "text","label": "YPMI Kode","name": "part_number","height": 32,"labelWidth": 80,"labelAlign": "center","placeholder": ""},
                ]},
                {"view": "text","label": "Part Name","name": "part_name","height": 32,"labelWidth": 115,"placeholder": ""},
                {"view": "text","label": "Size","name": "size","height": 32,"labelWidth": 115,"placeholder": ""},
                {"view": "text","label": "Type","name": "type_name","height": 32,"labelWidth": 115,"placeholder": ""},
                {"cols": [
                {"view": "text","label": "Brand","name": "brand","height": 32,"labelWidth": 115,"placeholder": ""},
                {"view": "text","label": "Quotation No.","name": "quo_no","height": 32,"labelAlign": "right","labelWidth": 115,"placeholder": ""},
                ]},
                {"cols": [
                {"view": "text","label": "Color","name": "color","height": 32,"labelWidth": 115,"placeholder": ""},
                {"view": "text","label": "Ref. HS Code","name": "hs_code","height": 32,"labelWidth": 115,"labelAlign": "right","placeholder": ""},
                ]},
            {id:"ctg","label": "Category","name": "category_id",
                // "options": {},
                // "options": url+"../backend/lumen/public/ctg",
                options:{
                        url:url+"../backend/lumen/public/ctg",
                        filter:function(obj, filter){
                            //obj - combo option
                            //filter - current text in combo control
                            return obj.value.indexOf(filter) != -1;
                        },},
                "view": "combo","height": 32,"labelAlign": "left","labelWidth": 115,validate:"isNotEmpty",width:280,
                on:{
                    onchange:function(value){console.log(value)}
                  }
                
            },
            {"cols": [            
            {id:"prod","label": "Prod Group","name": "product_id",
			//"options": url+"../backend/lumen/public/prod",
			options:{
                    url:url+"../backend/lumen/public/prod",
                    filter:function(obj, filter){
                        //obj - combo option
                        //filter - current text in combo control
                        return obj.value.indexOf(filter) != -1;
                    },},
            "view": "combo","height": 32,"labelAlign": "left","labelWidth": 115,
            // validate:"isNotEmpty",
            on:{
                onchange:function(value){console.log(value)}
              }
            },
            {id:"sub","label": "Sub Group",value:0,"name": "sub_id","options": {},"view": "combo","height": 32,"labelAlign": "right","labelWidth": 115,
            // validate:"isNotEmpty",
            on:{
                onchange:function(value){console.log(value)}
              }
            },
            ]},
            {"cols": [    
            {"label": "Uom Consumption",value:0,"name": "uom_id",
			//"options": url+"../backend/lumen/public/uom",
			options:{
                    url:url+"../backend/lumen/public/uom",
                    filter:function(obj, filter){
                        //obj - combo option
                        //filter - current text in combo control
                        return obj.value.indexOf(filter) != -1;
                    },},
			"view": "combo","height": 32,"labelAlign": "left","labelWidth": 115,validate:"isNotEmpty",
            on:{
                onchange:function(value){console.log(value)}
              }
            },
            {"label": "Uom Purchasing",value:0,"name": "uompurch_id",
			//"options": url+"../backend/lumen/public/uom",
			options:{
                    url:url+"../backend/lumen/public/uom",
                    filter:function(obj, filter){
                        //obj - combo option
                        //filter - current text in combo control
                        return obj.value.indexOf(filter) != -1;
                    },},
			"view": "combo","height": 32,"labelAlign": "right","labelWidth": 115,
            on:{
                onchange:function(value){console.log(value)}
              }
            },
            ]},
            {"cols": [ 
                {"view": "text","label": "Standar Packing","name": "standar_packing","height": 32,"labelWidth": 115,"placeholder": ""},
                {"label": "Vendor Type",value:0,"name": "vendor_type","options": ["Local","Import"],"view": "combo","height": 32,"labelAlign": "right","labelWidth": 115,validate:"isNotEmpty"},
            ]},
            {"cols": [
            {"view": "text","label": "Minimal Order Qty","name": "minimal_order","height": 32,"labelWidth": 115,"placeholder": ""},                   
            {id:"jenis","label": "Jenis Kode",value:0,"name": "jenis_kode","options": ["Reguler-Barang","Service-Jasa"],"view": "combo","height": 32,"labelAlign": "right","labelWidth": 115,validate:"isNotEmpty"},
                ]},
                
                {id:"vendor_ref","view": "combo",
                options:{
                    url:url+"../backend/lumen/public/vendor",
                    filter:function(obj, filter){
                        //obj - combo option
                        //filter - current text in combo control
                        return obj.value.indexOf(filter) != -1;
                    },},
               //options:url+"../backend/lumen/public/vendor",
                "label": "Vendor Name Ref.","name": "vendor_ref","height": 32,"labelWidth": 115,"placeholder": ""},

                {"cols": [
                    {id:"kode_ref","view": "select","options": {},"label": "Vendor Ref. Kode","name": "kode_ref","height": 32,"labelWidth": 115,"placeholder": ""},
                    {"label": "Currency Ref.",name:"curr_ref","options": ["silahkan pilih","IDR","USD","JPY","EUR","SGD","THB"],"view": "select","height": 32,"labelAlign": "right","labelWidth": 115},
                ]},
                {"cols": [
                    {"view": "text","label": "Quot. Price Ref.","name": "price_ref","height": 32,"labelWidth": 115, format: '1.111,00'},
                    {"view": "text","label": "Price After Nego","name": "nego_ref","height": 32,"labelWidth": 115, "labelAlign": "right",format: '1.111,00'},                    
                ]},
                {"view": "text","label": "Lead Time Pengiriman","name": "leadtime1","height": 32,"labelWidth": 115, format: '1.111,00'},
                    
                {id:"vendor_komp","view": "combo",
                options:{
                    url:url+"../backend/lumen/public/vendor",
                    filter:function(obj, filter){
                        //obj - combo option
                        //filter - current text in combo control
                        return obj.value.indexOf(filter) != -1;
                    },},                
                //options:url+"../backend/lumen/public/vendor",
                "label": "Vendor Name Komp.","name": "vendor_komp","height": 32,"labelWidth": 115,"labelAlign": "left","placeholder": ""},
                
                {"cols": [
                    {id:"kode_komp","view": "select","options": {},"label": "Vendor Komp. Kode","name": "kode_komp","height": 32,"labelWidth": 115,"labelAlign": "left","placeholder": ""},
                    {"label": "Currency Komp.",name:"curr_komp","options": ["silahkan pilih","IDR","USD","JPY","EUR","SGD","THB"],"view": "select","height": 32,"labelAlign": "right","labelWidth": 115},
                ]},
                {"cols": [
                    {"view": "text","label": "Komparasi Price","name": "price_komp","height": 32,"labelWidth": 115,"labelAlign": "left","placeholder": ""},
                    {"view": "text","label": "Komparasi Nego","name": "nego_komp","height": 32,"labelWidth": 115,"labelAlign": "right","placeholder": ""},
                ]},
                {"view": "text","label": "Lead Time Pengiriman","name": "leadtime2","height": 32,"labelWidth": 115, format: '1.111,00'},
                 
                

                {"cols": [
                {"view": "datepicker","label": "Submit Date","name": "submit_date","height": 32,"labelWidth": 115,format: "%Y-%m-%d","value": ""},
                {"view": "datepicker","label": "Appr YIMM Date","name": "yimm_date","height": 32,"labelWidth": 115,"labelAlign": "right",format: "%Y-%m-%d","value": ""},
                ]},
                {"cols": [
                {"view": "datepicker","label": "Submit Price Date","name": "price_date","height": 32,"labelWidth": 115,format: "%Y-%m-%d","value": ""},
                {"view": "datepicker","label": "Appr Date","name": "activation_date","height": 32,"labelWidth": 115,"labelAlign": "right",format: "%Y-%m-%d","value": "",
                on:{
                    onChange:function(){
                      $$("option").setValue("ACTIVE");
                    }
                  }
                },
                ]},

            
            {view:"label",css:{'color':"black",'font-weight':"bold",'font-size':"13px"},label:"Lampiran file register new part (Maks. 2 MB):"},
            {"cols": [      
            {view: "uploader", name:"quotation", id:"upl1", autosend:true, value: 'Quotation - pdf', link:"mylist1", accept:"application/pdf", upload:url+"../backend/lumen/public/uploadfile","height": 30,"width": 150},
            {view:"list",  id:"mylist1", type:"uploader",autoheight:true, borderless:true},
            ]},
            {"cols": [
            {view: "uploader",name:"msds", id:"upl2", autosend:true, value: 'MSDS / SIPPP - pdf', link:"mylist2", accept:"application/pdf", upload:url+"../backend/lumen/public/uploadfile","height": 30,"width": 150},
            {view:"list",  id:"mylist2", type:"uploader",autoheight:true, borderless:true},
            ]},
            {"cols": [
            {view: "uploader",name:"foto", id:"upl3", autosend:true, value: 'Foto Part - jpg',accept:"image/png, image/gif, image/jpeg, image/jpg", link:"mylist3", upload:url+"../backend/lumen/public/uploadfile","height": 30,"width": 150},
            {view:"list",  id:"mylist3", type:"uploader",autoheight:true, borderless:true},
            ]},
            {"cols": [
            {view: "uploader",name:"drawing", id:"upl4", autosend:true, value: 'Drawing - pdf', link:"mylist4",  accept:"application/pdf",upload:url+"../backend/lumen/public/uploadfile","height": 30,"width": 150},
            {view:"list",  id:"mylist4", type:"uploader",autoheight:true, borderless:true},
            ]},

            {id:"option",name:"status","label": "Status","value": "","options": ["ACTIVE","CANCEL"],"view": "radio","height": 0,"width": 0,"labelAlign": "center",
                click:function(){
                    if (this.getValue() == "CANCEL") {
                        $$("catatan").show();
                        $$("rmk").show();
                    } else {
                        $$("catatan").hide();
                        $$("rmk").hide();
                        
                    }
                }
            },
                
            {id:"catatan",view:"label", label:"Catatan alasan pembatalan registrasi kode (Cancel):", hidden:true},
            {id:"rmk", name:"remark", view:"textarea", readonly:false, height:100, hidden:true},

            {view: "button", label: "Update Register New Part","height": 32, click: function() {
                        if (this.getFormView().validate()) // on success
							{
                            //webix.message("All is correct");                                                        
							var data = $$("myform_reg").getValues();
								//send data to server
								webix.ajax().put(url+"../backend/lumen/public/updateRegister", data).then(() => webix.message("Saved")).then(() => $$("table_register").clearAll()).
                                then(() => $$("table_register").load(url+"../backend/lumen/public/register"));
                                $$("myform_reg").clear();
                                ///$$("table_register").clearAll();
                                //$$("table_register").load(url+"../backend/lumen/public/register");
                                webix.ajax().post(url+"../backend/lumen/public/saveLog", data)
							}
							else
							webix.message({ type:"error", text:"Form data is invalid" });
               //$$("upl1").send(function(response){if(response) webix.message(response.status);});
            }           
            },
                                            
            {view:"label",css:{'color':"red",'font-weight':"bold"},label:"Noted : Mencegah Dead Stock berakibat cost, saat mengganti part perhatikan stok WH & Vendor"},
                ],
            //"height": 1500
        },
        $oninit: function(){
            $$("prod").attachEvent("onChange", function(){ 
				var sub = $$("sub"); 
				sub.setValue("");
				var prod_id = this.getValue();
				sub.define("options", url+"../backend/lumen/public/sub/"+prod_id);
            });
            
            $$("vendor_ref").attachEvent("onChange", function(){ 
				var kode_ref = $$("kode_ref"); 
				var vendor_ref = this.getValue();
				kode_ref.define("options", url+"../backend/lumen/public/vendor/"+vendor_ref);
			});
            
            $$("vendor_komp").attachEvent("onChange", function(){ 
				var kode_komp = $$("kode_komp"); 
				var vendor_komp = this.getValue();
				kode_komp.define("options", url+"../backend/lumen/public/vendor/"+vendor_komp);
            });
            
            // $$("jenis").attachEvent("onChange", function(){ 
			// 	var ctg = $$("ctg"); 
			// 	ctg.setValue("");
			// 	var jenis = this.getValue();
			// 	ctg.define("options", url+"../backend/lumen/public/ctg/"+jenis);

            // });
            
            // $$("jenis").attachEvent("onChange", function(){ 
			// 	var ctg = $$("ctg"); 
			// 	// ctg.setValue("");
			// 	var jenis = this.getValue();
			// 	ctg.define("options", url+"backend/lumen/public/ctg/"+jenis);
			// 	if (jenis == 'Service-Jasa') {
			// 		$$('prod').define("options", ["-"]);
			// 	} else {
			// 		$$('prod').define("options", url+"backend/lumen/public/prod");
			// 	}

			// });

        }
    };

});

//combo.getList().add({id:"", value:"", $empty:true}, 0)