define([], function() {

    var url = window.location.protocol +"//"+ window.location.hostname+ ":" +window.location.port + window.location.pathname;
    
    return {
        $ui: {id:"myform_reg","autoheight": true,"view": "form","borderless": true,"width": 580,
        "rows": [
            //{view:"label",css:{'color':"gray",'font-weight':"bold",'font-size':"14px"},label:"Untuk pendaftaran kode baru silahkan di isi form berikut :"},
            {"view": "text","label": "User Name","name": "user","height": 32,"labelWidth": 115,"placeholder": "Tulis di sini ...",validate:"isNotEmpty"},
            {"view": "text","label": "Email Requestor","name": "email","height": 32,"labelWidth": 115,"placeholder": "Tulis di sini ...",validate:"isNotEmpty"},
            {"view": "text","label": "Part Name","name": "part_name","height": 32,"labelWidth": 115,"placeholder": "Tulis di sini ...",validate:"isNotEmpty"},
            {"view": "text","label": "Size","name": "size","height": 32,"labelWidth": 115,"placeholder": "Tulis di sini ...",validate:"isNotEmpty"},
            {"view": "text","label": "Type","name": "type_name","height": 32,"labelWidth": 115,"placeholder": "Tulis di sini ...",validate:"isNotEmpty"},
            {"view": "text","label": "Brand","name": "brand","height": 32,"labelWidth": 115,"placeholder": "Tulis di sini ...",validate:"isNotEmpty"},
            {"view": "text","label": "Color","name": "color","height": 32,"labelWidth": 115,"placeholder": "Tulis di sini ...",validate:"isNotEmpty"},
            {"view": "text","label": "Ref. HS Code","name": "hs_code","height": 32,"labelWidth": 115,"placeholder": "HS code khusus untuk kode Import ...",validate:"isNotEmpty"},
            {"view": "text","label": "Ref. kode Reguler","placeholder": "Referensi kode lama jika ada penggantian ...","name": "ref_reguler","labelWidth": 115,validate:"isNotEmpty"},
            {"view": "text","label": "Ref. kode Trial","placeholder": "Referensi kode trial jika sudah input ke sistem ...","name": "ref_trial","labelWidth": 115,validate:"isNotEmpty"},
            
            {id:"jenis","label": "Jenis Kode",value:0,"name": "jenis_kode","options": ["Reguler-Barang","Service-Jasa"],"view": "combo","height": 32,"labelAlign": "left","labelWidth": 115,validate:"isNotEmpty"},
            {id:"ctg","label": "Category","name": "category_id","options": {},
			//"options": url+"backend/lumen/public/ctg",
			// options:{
            //         url:url+"backend/lumen/public/ctg",
            //         filter:function(obj, filter){
            //             //obj - combo option
            //             //filter - current text in combo control
            //             return obj.value.indexOf(filter) != -1;
            //         },},
			"view": "combo","height": 32,"labelAlign": "left","labelWidth": 115,validate:"isNotEmpty",
            on:{
                onchange:function(value){console.log(value)}
              }
            
            },
            {"cols": [
            
            {id:"prod","label": "Prod Group","name": "product_id",
			//"options": url+"backend/lumen/public/prod",
			options:{
                    url:url+"backend/lumen/public/prod",
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
            ]},
            {"cols": [                
            {id:"sub","label": "Sub Group",value:0,"name": "sub_id","options": {},"view": "combo","height": 32,"labelAlign": "left","labelWidth": 115,validate:"isNotEmpty",
            on:{
                onchange:function(value){console.log(value)}
              }
            },
            {"label": "Uom Consumption",value:0,"name": "uom_id",
			//"options": url+"backend/lumen/public/uom",
			options:{
                    url:url+"backend/lumen/public/uom",
                    filter:function(obj, filter){
                        //obj - combo option
                        //filter - current text in combo control
                        return obj.value.indexOf(filter) != -1;
                    },},
			"view": "combo","height": 32,"labelAlign": "right","labelWidth": 115,validate:"isNotEmpty",
            on:{
                onchange:function(value){console.log(value)}
              }
            },
            ]},
            {"cols": [                
            {"label": "Vendor Type",value:0,"name": "vendor_type","options": ["Local","Import"],"view": "combo","height": 32,"labelAlign": "left","labelWidth": 115,validate:"isNotEmpty"},
            
            ]},			
                {"view": "text","label": "Quotation No.","name": "quo_no","height": 32,"labelAlign": "left","labelWidth": 115,"placeholder": "Tulis di sini ...",validate:"isNotEmpty"},
			//{"cols": [
                {id:"vendor_ref","view": "combo",
                options:{
                    url:url+"backend/lumen/public/vendor",
                    filter:function(obj, filter){
                        //obj - combo option
                        //filter - current text in combo control
                        return obj.value.indexOf(filter) != -1;
                    },},
               //options:url+"backend/lumen/public/vendor",
                "label": "Vendor Name Ref.","name": "vendor_ref","height": 32,"labelWidth": 115,"placeholder": "",validate:"isNotEmpty"},

                
                    {id:"kode_ref",hidden:true,"view": "select","options": {},"label": "Vendor Kode Ref.","name": "kode_ref","height": 32,"labelWidth": 115,"labelAlign": "left","placeholder": "",validate:"isNotEmpty"},
            //]},
                {"cols": [
				    {"label": "Currency Ref.",name:"curr_ref","options": ["","IDR","USD","JPY","EUR","SGD","THB"],"view": "select","height": 32,"labelAlign": "left","labelWidth": 115,validate:"isNotEmpty"},
                
                    {"view": "text","label": "Quot. Price Ref.","name": "price_ref","height": 32,"labelWidth": 115,"labelAlign": "right", format: '1.111,00',validate:"isNotEmpty"},
                ]},

			
            {"cols": [
            {"label": "Warehouse Lokasi",value:0,"name": "wh_lokasi","options": ["WH2","WH4","WH5","WH6","WH7","WH8"],"view": "combo","height": 32,"labelAlign": "left","labelWidth": 115,validate:"isNotEmpty"},
            {"view": "text","label": "Safety Stok","name": "safety_stok","height": 32,"labelAlign": "right","labelWidth": 115,"placeholder": "Tulis di sini ...",validate:"isNotEmpty"},
            ]},
            {cols:[
                {"view": "text","label": "    Fungsi Barang","name": "fungsi","height": 32,"labelWidth": 115,"placeholder": "Tulis di sini ...",validate:"isNotEmpty"},
            ]

            },
            
            {view:"label",css:{'color':"black",'font-weight':"bold",'font-size':"13px"},label:"Lampiran file register new part (Maks. 1 MB):"},
            {"cols": [
            {view: "uploader", name:"quotation", id:"upl1", autosend:true, value: 'Quotation - pdf', link:"mylist1", accept:"application/pdf", upload:url+"backend/lumen/public/uploadfile","height": 30,"width": 150},
            {view:"list",  id:"mylist1", type:"uploader",autoheight:true, borderless:true},
            ]},
            {"cols": [
            {view: "uploader",name:"msds", id:"upl2", autosend:true, value: 'MSDS / SIPPP - pdf', link:"mylist2", accept:"application/pdf", upload:url+"backend/lumen/public/uploadfile","height": 30,"width": 150},
            {view:"list",  id:"mylist2", type:"uploader",autoheight:true, borderless:true},
            ]},
            {"cols": [
            {view: "uploader",name:"foto", id:"upl3", autosend:true, value: 'Foto Part - jpg',accept:"image/png, image/gif, image/jpeg, image/jpg", link:"mylist3", upload:url+"backend/lumen/public/uploadfile","height": 30,"width": 150},
            {view:"list",  id:"mylist3", type:"uploader",autoheight:true, borderless:true},
            ]},
            {"cols": [
            {view: "uploader",name:"drawing", id:"upl4", autosend:true, value: 'Drawing - pdf', link:"mylist4",  accept:"application/pdf",upload:url+"backend/lumen/public/uploadfile","height": 30,"width": 150},
            {view:"list",  id:"mylist4", type:"uploader",autoheight:true, borderless:true},
            ]},
            {view: "button", label: "Submit Register New Part","height": 32, click: function() {
                        if (this.getFormView().validate()) // on success
							{
                            //webix.message("All is correct");                            
							var data = $$("myform_reg").getValues();
								//send data to server
                                webix.ajax().post(url+"backend/lumen/public/submitRegister", data).then(() => webix.message("Saved")).then(() => $$("table_register").clearAll()).
                                then(() => $$("table_register").load(url+"backend/lumen/public/register"));
                                $$("myform_reg").clear();
                                
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
				sub.define("options", url+"backend/lumen/public/sub/"+prod_id);
				if (prod_id == '-') {
					$$('sub').define("options", ["-"]);
				}

			});
			
			$$("vendor_ref").attachEvent("onChange", function(){ 
				var kode_ref = $$("kode_ref"); 
				var vendor_ref = this.getValue();
				kode_ref.define("options", url+"backend/lumen/public/vendor/"+vendor_ref);
            });
            
            $$("jenis").attachEvent("onChange", function(){ 
				var ctg = $$("ctg"); 
				ctg.setValue("");
				var jenis = this.getValue();
				ctg.define("options", url+"backend/lumen/public/ctg/"+jenis);
				if (jenis == 'Service-Jasa') {
					$$('prod').define("options", ["-"]);
				} else {
					$$('prod').define("options", url+"backend/lumen/public/prod");
				}

			});

        }
    };

});

//combo.getList().add({id:"", value:"", $empty:true}, 0)