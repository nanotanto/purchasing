define([     

], function() {

    var url = window.location.protocol +"//"+ window.location.hostname+ ":" +window.location.port + window.location.pathname;

    var ui = {
        cols:[{
            rows:[
                { 
                    view:"datatable",	
                    id:"table",
                    "select": true,
                    columns:[
                        { id:"id", hidden:true, header:"ID",      width:100, },
                        { id:"code", header:["Code",{ content:"textFilter"}],      width:200, },
                        { id:"name", header:["Vendor Name,",{ content:"textFilter"}], fillspace:true},
                    ],
                    url: url+"../backend/lumen/public/vendorIndex",
                    },
                    {
                        view:"toolbar", 
                        //height: 50,
                        cols:[
                            { gravity:2 },
                            { view:"button", value:"Delete Vendor", click:function(){
                                var id_vendor = $$("table").getSelectedId();
                                $$("table").remove(id_vendor);
                                webix.ajax().post(url+"../backend/lumen/public/deleteVendor/"+id_vendor).then(() => webix.message("Deleted")).then(() => $$("table").clearAll()).
                                    then(() => $$("table").load(url+"../backend/lumen/public/vendorIndex"));
                            }}
                        ]
                    }
            ]
        },
                
            {id:"form_vendor","autoheight": true,"view": "form","borderless": true,"width": 300,
            "rows": [
                //{view:"label",css:{'color':"gray",'font-weight':"bold",'font-size':"14px"},label:"Untuk pendaftaran kode baru silahkan di isi form berikut :"},
                {view:"label", label:"<bold>Tambah Vendor Baru</bold>"},
                {"view": "text","label": "Code","name": "code","height": 32,"labelWidth": 115,"placeholder": "Tulis di sini ...",validate:"isNotEmpty"},
                {"view": "text","label": "Vendor Name","name": "name","height": 32,"labelWidth": 115,"placeholder": "Tulis di sini ...",validate:"isNotEmpty"},
                
                {view: "button", label: "Save","height": 32, click: function() {
                            if (this.getFormView().validate()) // on success
                                {
                                //webix.message("All is correct");                            
                                var data = $$("form_vendor").getValues();
                                    //send data to server
                                    webix.ajax().post(url+"../backend/lumen/public/addVendor", data).then(() => webix.message("Saved")).then(() => $$("table").clearAll()).
                                    then(() => $$("table").load(url+"../backend/lumen/public/vendorIndex"));
                                    $$("form_vendor").clear();
                                    
                                }
                                else
                                webix.message({ type:"error", text:"Form data is invalid" });
                   //$$("upl1").send(function(response){if(response) webix.message(response.status);});
                }           
                },
                                                
                    ],
                //"height": 1500
            }
          ]
    };

    return {
        $ui:ui
    };

});