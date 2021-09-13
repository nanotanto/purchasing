define([], function() {

    var url = window.location.protocol +"//"+ window.location.hostname+ ":" +window.location.port + window.location.pathname;
    
    return {
        $ui: {id:"form_vendor","autoheight": true,"view": "form","borderless": true,"width": 580,
        "rows": [
            //{view:"label",css:{'color':"gray",'font-weight':"bold",'font-size':"14px"},label:"Untuk pendaftaran kode baru silahkan di isi form berikut :"},
            {view:"label", label:"<bold>Tambah Vendor Baru</bold>"},
            {"view": "text","label": "Code","name": "code","height": 32,"labelWidth": 115,"placeholder": "Tulis di sini ...",validate:"isNotEmpty"},
            {"view": "text","label": "Name Vendor","name": "name","height": 32,"labelWidth": 115,"placeholder": "Tulis di sini ...",validate:"isNotEmpty"},
            
            {view: "button", label: "Save","height": 32, click: function() {
                        if (this.getFormView().validate()) // on success
							{
                            //webix.message("All is correct");                            
							var data = $$("form_vendor").getValues();
								//send data to server
                                webix.ajax().post(url+"../backend/lumen/public/addVendor", data).then(() => webix.message("Saved")).then(() => $$("table").clearAll()).
                                then(() => $$("table").load(url+"backend/lumen/public/vendorIndex"));
                                $$("form_vendor").clear();
                                
							}
							else
							webix.message({ type:"error", text:"Form data is invalid" });
               //$$("upl1").send(function(response){if(response) webix.message(response.status);});
            }           
            },
                                            
                ],
            //"height": 1500
        },
    };

});

//combo.getList().add({id:"", value:"", $empty:true}, 0)