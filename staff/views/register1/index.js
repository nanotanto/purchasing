define([], function() {
    
    var ui = {
       "rows": [
        {"cols": [
            {"view": "label","height": 0,"width": "5","borderless": true},
            {"autoheight": false,"view": "form","borderless": true,"width": 550,
                "rows": [
                    {view:"label",css:{'color':"gray",'font-weight':"bold",'font-size':"14px"},label:"Untuk pendaftaran kode baru silahkan di isi form berikut :"},
                    {"cols": [
                    {"view": "text","label": "Draft No","name": "draft","height": 32,"labelWidth": 115,"placeholder": "","width": 225},
                    {"view": "text","label": "YPMI Kode","name": "kode","height": 32,"labelWidth": 80,"labelAlign": "center","placeholder": ""},
                    ]},
                    {"view": "text","label": "Part Name","name": "name","height": 32,"labelWidth": 115,"placeholder": ""},
                    {"view": "text","label": "Size","name": "size","height": 32,"labelWidth": 115,"placeholder": ""},
                    {"view": "text","label": "Type","name": "type","height": 32,"labelWidth": 115,"placeholder": ""},
                    {"cols": [
                    {"view": "text","label": "Brand","name": "brand","height": 32,"labelWidth": 115,"placeholder": ""},
                    {"view": "text","label": "Quotation","name": "brand","height": 32,"labelAlign": "center","labelWidth": 115,"placeholder": ""},
                    ]},
                    {"cols": [
                    {"view": "text","label": "Color","name": "color","height": 32,"labelWidth": 115,"placeholder": ""},
                    {"view": "text","label": "Ref. HS Code","name": "hscode","height": 32,"labelWidth": 115,"labelAlign": "center","placeholder": ""},
                    ]},
                    {"cols": [
                    {"label": "Category","options": "demo->5f042ed11c5a070012ac9430kategori","view": "select","height": 32,"labelAlign": "left","labelWidth": 115,"width": 185},
                    {"label": "Prod Group","options": "demo->5f042ed11c5a070012ac9430kategori","view": "select","height": 32,"labelAlign": "center","labelWidth": 100},
                    {"label": "Sub Group","options": "demo->5f042ed11c5a070012ac9430","view": "select","height": 32,"labelAlign": "center","labelWidth": 100},
                    ]},
                    {"cols": [
                    {"label": "Uom Consumption","options": "demo->5f042ed11c5a070012ac9430","view": "select","height": 32,"labelAlign": "left","labelWidth": 115},
                    {"label": "Uom Purchasing","options": "demo->5f042ed11c5a070012ac9430","view": "select","height": 32,"labelAlign": "center","labelWidth": 115},
                    ]},
                    {"cols": [
                    {"view": "text","label": "Standar Packing","name": "standar packing","height": 32,"labelWidth": 115,"placeholder": ""},
                    {"label": "Vendor Type","options": ["silahkan pilih","Lokal","Import"],"view": "select","height": 32,"labelAlign": "center","labelWidth": 115},
                    ]},
                    {"cols": [
                    {"view": "text","label": "Minimal Order Qty","name": "minimal order","height": 32,"labelWidth": 115,"placeholder": ""},                   
                    {"label": "Jenis Kode","options": ["silahkan pilih","Reguler","Trial","Service"],"view": "select","height": 32,"labelAlign": "center","labelWidth": 115},
                    ]},
                    {"cols": [
                    {"label": "Vndr Ref. Name","options": "demo->5f042ed11c5a070012ac9430","view": "select","height": 32,"labelAlign": "left","labelWidth": 115},
                    {"label": "Vndr Komp. Name","options": "demo->5f042ed11c5a070012ac9430","view": "select","labelAlign": "center","height": 32,"labelAlign": "left","labelWidth": 115},
                    ]},
                    {"cols": [
                    {"view": "text","label": "Vndr Komp. Kode","name": "vendor kode","height": 32,"labelWidth": 115,"placeholder": ""},
                    {"view": "text","label": "Vndr Ref. Kode","name": "vendor kode","height": 32,"labelWidth": 115,"labelAlign": "center","placeholder": ""},
                    ]},
                    {"cols": [
                    {"label": "Currency Ref.","options": ["silahkan pilih","IDR","USD","JPY","EUR","SGD","THB"],"view": "select","height": 32,"labelAlign": "left","labelWidth": 115},
                    {"label": "Currency Komp.","options": ["silahkan pilih","IDR","USD","JPY","EUR","SGD","THB"],"view": "select","height": 32,"labelAlign": "center","labelWidth": 115},
                    ]},
                    {"cols": [
                    {"view": "text","label": "Quotation Ref.","name": "minimal order","height": 32,"labelWidth": 115,"placeholder": ""},
                    {"view": "text","label": "Komparasi Price","name": "minimal order","height": 32,"labelWidth": 115,"labelAlign": "center","placeholder": ""}
                    ]},
                    {"cols": [
                    {"view": "text","label": "Price After Nego","name": "minimal order","height": 32,"labelWidth": 115,"placeholder": ""},
                    {"view": "text","label": "Komparasi Nego","name": "minimal order","height": 32,"labelWidth": 115,"labelAlign": "center","placeholder": ""},
                    ]},
                    {"cols": [
                    {"view": "text","label": "Submit Date","name": "submit","height": 32,"labelWidth": 115,"placeholder": ""},
                    {"view": "text","label": "Appr YIMM Date","name": "appryimm","height": 32,"labelWidth": 115,"labelAlign": "center","placeholder": ""},
                    ]},
                    {"cols": [
                    {"view": "text","label": "Submit Price Date","name": "submitprice","height": 32,"labelWidth": 115,"placeholder": ""},
                    {"view": "text","label": "Appr Date","name": "apprdate","height": 32,"labelWidth": 115,"labelAlign": "center","placeholder": ""},
                    ]},
                            
                {"rows": [
                    
                    {view:"label",css:{'color':"gray",'font-weight':"bold",'font-size':"13px"},label:"Lampiran file register new part :"},
                    {"cols": [
                    {view: "button", label: "Open Quot","width": 100,"height": 32, click: function() {$$("upl1").send(function(response){if(response) webix.message(response.status);});}},
                    {view: "uploader", id:"upl1", autosend:false, value: 'Upload Quotation - pdf', link:"mylist1", upload:"//docs.webix.com/samples/server/upload","height": 30,"width": 150},
                    {view:"list",  id:"mylist1", type:"uploader",autoheight:true, borderless:true},
                    ]},
                    {"cols": [
                    {view: "button", label: "Open MSDS","width": 100,"height": 32, click: function() {$$("upl1").send(function(response){if(response) webix.message(response.status);});}},
                    {view: "uploader", id:"upl2", autosend:false, value: 'Upload MSDS - pdf', link:"mylist2", upload:"//docs.webix.com/samples/server/upload","height": 30,"width": 150},
                    {view:"list",  id:"mylist2", type:"uploader",autoheight:true, borderless:true},
                    ]},
                    {"cols": [
                    {view: "button", label: "Open Foto","width": 100,"height": 32, click: function() {$$("upl1").send(function(response){if(response) webix.message(response.status);});}},
                    {view: "uploader", id:"upl3", autosend:false, value: 'Upload Foto Part - jpg', link:"mylist3", upload:"//docs.webix.com/samples/server/upload","height": 30,"width": 150},
                    {view:"list",  id:"mylist3", type:"uploader",autoheight:true, borderless:true},
                    ]},
                    {"cols": [
                    {view: "button", label: "Open Drawing","width": 100,"height": 32, click: function() {$$("upl1").send(function(response){if(response) webix.message(response.status);});}},
                    {view: "uploader", id:"upl4", autosend:false, value: 'Upload Drawing - pdf', link:"mylist4", upload:"//docs.webix.com/samples/server/upload","height": 30,"width": 150},
                    {view:"list",  id:"mylist4", type:"uploader",autoheight:true, borderless:true},
                    ]},
                    {"view": "label","height": 8},
                    {view: "button", label: "Submit Revisi Register New Part","width": 300,"height": 32, click: function() {$$("upl1").send(function(response){if(response) webix.message(response.status);});}},
                         ],
                        },
                    ],
                    "height": 800
                 },
                                        
            {"autoheight": false,"view": "form","borderless": true,"width": 1140,
                "rows": [
                  {"cols": [
                  {view:"label",css:{'color':"gray",'font-weight':"bold",'font-size':"14px"},"width": 810,label:"Status pendaftaran kode baru :"},
                  {view:"button", label: "Filter Data", popup:"my_pop", "width": 150}, 
                  {view: "button", label: "Download Data","width": 150, inputHeight: 30, click: function() {webix.toExcel($$("table"));}},
                  ]},
                 
                {"url": "demo->5f042ed11c5a070012ac942e",
                "columns": [
                    {"id": "status","header":[{text:"Status", css:{"text-align":"center"} },{content:"textFilter"}],"sort": "string",width:80},
                    {"id": "ref_reguler","header":[{text:"Ref. Kode Reguler", css:{"text-align":"center"} },{content:"textFilter"}],"sort": "string"},
                    {"id": "ref_trial","header":[{text:"Ref. Kode Trial", css:{"text-align":"center"} },{content:"textFilter"}],"sort": "string",width:100},
                    {"id": "draft_no","header":[{text:"Draft No", css:{"text-align":"center"} },{content:"textFilter"}],"sort": "string",width:80},
                    {"id": "part_number","header":[{text:"YPMI Code", css:{"text-align":"center"} },{content:"textFilter"}],"sort": "string"},
                    {"id": "part_name","header":[{text:"Part Name", css:{"text-align":"center"} },{content:"textFilter"}],"sort": "string"},
                    {"id": "size","header":[{text:"Size", css:{"text-align":"center"} },{content:"textFilter"}],"sort": "string"},
                    {"id": "color","header":[{text:"Color", css:{"text-align":"center"} },{content:"textFilter"}],"sort": "string",width:80},
                    {"id": "brand","header":[{text:"Brand", css:{"text-align":"center"} },{content:"textFilter"}],"sort": "string"},
                    {"id": "type_name","header": [{text:"Type", css:{"text-align":"center"} },{content:"textFilter"}],"sort": "string"},
                    {"id": "hs_code","header":[{text:"HS Code", css:{"text-align":"center"} },{content:"textFilter"}],"sort": "string",width:100},
                    {"id": "uom_cons","header":[{text:"Uom Consumption", css:{"text-align":"center"} },{content:"textFilter"}],"sort": "string"},
                    {"id": "categori","header":[{text:"Category", css:{"text-align":"center"} },{content:"textFilter"}],"sort": "string"},
                    {"id": "product_id","header":[{text:"Produk Group", css:{"text-align":"center"} },{content:"textFilter"}],"sort": "string"},
                    {"id": "sub_id","header":[{text:"Sub Group", css:{"text-align":"center"} },{content:"textFilter"}],"sort": "string"},
                    {"id": "jenis_kode","header":[{text:"Jenis Kode", css:{"text-align":"center"} },{content:"textFilter"}],"sort": "string",width:80},
                    {"id": "vendor_type","header": [{text:"Vendor Type", css:{"text-align":"center"} },{content:"textFilter"}],"sort": "string",width:100},
                    {"id": "wh_lokasi","header": [{text:"WH Lokasi", css:{"text-align":"center"} },{content:"textFilter"}],"sort": "string",width:80},
                    {"id": "safety_stok","header": [{text:"Safety Stok", css:{"text-align":"center"} },{content:"textFilter"}],"sort": "string",width:90},
                    {"id": "user","header":[{text:"User Name", css:{"text-align":"center"} },{content:"textFilter"}],"sort": "string"},
                    {"id": "email","header":[{text:"Email User", css:{"text-align":"center"} },{content:"textFilter"}],"sort": "string"},
                    {"id": "fungsi","header":[{text:"Fungsi Part", css:{"text-align":"center"} },{content:"textFilter"}],"sort": "string"},
                    {"id": "request_date","header": [{text:"Request Date", css:{"text-align":"center"} },{content:"textFilter"}],"sort": "string",width:110},
                    {"id": "submit_date","header": [{text:"Submit Date", css:{"text-align":"center"} },{content:"textFilter"}],"sort": "string",width:110},
                    {"id": "yimm_date","header": [{text:"Approve YIMM Date", css:{"text-align":"center"} },{content:"textFilter"}],"sort": "string",width:110},
                    {"id": "price_date","header": [{text:"Submit Price Date", css:{"text-align":"center"} },{content:"textFilter"}],"sort": "string",width:110},
                    {"id": "activatiom_date","header": [{text:"Activation Date", css:{"text-align":"center"} },{content:"textFilter"}],"sort": "string",width:110},
                            ],
                        "view": "datatable",
                        "borderless": 1,
                                        "columnWidth": 140,
                                        "multiselect": true,
                                        "resizeColumn": true,
                                        "resizeRow": true,
                                        "areaselect": true,
                                        "height": 800,
                                        "dragColumn": true,
                                        "clipboard": "custom",
                                        "blockselect": "select",
                                        "dragscroll": true,
                                        "scrollAlignY": true,
                                        "scrollX": true,
                                        "scrollY": true,
                                        "scroll": "xy",
                                        "select": true,
                                        "editMath": true,
                                        "editable": true,
                                        //"autowidth": true,
                                        }
                                        ]
                                        },
                                    ],
                                },
                            ]
                        
    };

    return {
        $ui:ui
    };

});
