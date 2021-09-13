define([
], function() {
    
    var ui = {
        "rows": [
            {"cols":    [
                    {"width": 0,"rows": [
                            {"cols": [
                                    {"view": "label","height": 0,"width": "15","borderless": true},
                                    {"autoheight": false,"view": "form","borderless": true,"width": 775,
                                        "rows": [
                                            {"label": "Untuk pendaftaran kode baru silahkan di isi form berikut :","view": "label","height": 30},
                                            {"view": "text","label": "User Name","name": "username","height": 32,"labelWidth": 110,"placeholder": "Tulis di sini ..."},
                                            {"view": "text","label": "Email Requestor","name": "name","height": 32,"labelWidth": 110,"placeholder": "Tulis di sini ..."},
                                            {"view": "text","label": "Part Name","name": "name","height": 32,"labelWidth": 110,"placeholder": "Tulis di sini ..."},
                                            {"view": "text","label": "Size","name": "size","height": 32,"labelWidth": 110,"placeholder": "Tulis di sini ..."},
                                            {"view": "text","label": "Type","name": "type","height": 32,"labelWidth": 110,"placeholder": "Tulis di sini ..."},
                                            {"view": "text","label": "Brand","name": "brand","height": 32,"labelWidth": 110,"placeholder": "Tulis di sini ..."},
                                            {"view": "text","label": "Color","name": "color","height": 32,"labelWidth": 110,"placeholder": "Tulis di sini ..."},
                                            {"view": "text","label": "Fungsi Barang","name": "fungsi","height": 32,"labelWidth": 110,"placeholder": "Tulis di sini ..."},
                                                ]
                                    },
                                    {"autoheight": false,"view": "form","borderless": true,"width": 530,
                                        "rows": [
                                            {"view": "label","height": 30},
                                            {"view": "text","label": "Ref. HS Code","name": "hscode","height": 32,"labelWidth": 110,"placeholder": "HS code khusus untuk kode Import ..."},
                                            {"view": "text","label": "Ref. kode Reguler","placeholder": "Referensi kode lama jika ada penggantian ...","name": "fungsi","labelWidth": 115},
                                            {"view": "text","label": "Ref. kode Trial","placeholder": "Referensi kode trial jika sudah input ke sistem ...","name": "fungsi","labelWidth": 115},
                                            {"label": "Uom Consumption","options": "demo->5f042ed11c5a070012ac9430","view": "select","height": 32,"labelAlign": "left","labelWidth": 115},
                                            {"label": "Category","options": "demo->5f042ed11c5a070012ac9430kategori","view": "select","height": 32,"labelAlign": "left","labelWidth": 115},
                                            {"label": "Sub Group","options": "demo->5f042ed11c5a070012ac9430","view": "select","height": 32,"labelAlign": "left","labelWidth": 115},
                                            {"label": "Vendor Type","options": "demo->5f042ed11c5a070012ac9430vendortype","view": "select","height": 32,"labelAlign": "left","labelWidth": 115},
                                            {"label": "Jenis Kode","options": "demo->5f042ed11c5a070012ac9430jeniskode","view": "select","height": 32,"labelAlign": "left","labelWidth": 115},
                                                ]
                                    },
                                    {
                                        "rows": [
                                            {"view": "label","height": 45},
                                            {view: "uploader", id:"upl1", autosend:false, value: 'Upload Quotation', link:"mylist", upload:"//docs.webix.com/samples/server/upload","height": 35},
                                            {view:"list",  id:"mylist", type:"uploader",autoheight:true, borderless:true},
                                            {view: "button", label: "Save files","height": 35, click: function() {$$("upl1").send(function(response){if(response) webix.message(response.status);});}},
                                                ],
                                        "width": 200
                                    },
                                    {"view": "label","width": 25,"height": 0},
                                ],
                                "height": 400
                            },
                            {
                                "height": 30,
                                "cols": [
                                    {"label": "", "view": "label", "height": 0, "width": 10 },
                                    {"label": "Status pendaftaran kode baru :","view": "label","height": 30},
                                       ]
                            },
                            {"url": "demo->5f042ed11c5a070012ac942e",
                                "columns": [
                                    {"id": "part name","header":["Part Name",{content:"textFilter"}],"sort": "string"},
                                    {"id": "size","header":["Size",{content:"textFilter"}],"sort": "string"},
                                    {"id": "color","header":["Color",{content:"textFilter"}],"sort": "string"},
                                    {"id": "brand","header":["Brand",{content:"textFilter"}],"sort": "string"},
                                    {"id": "type","header": ["Type",{content:"textFilter"}],"sort": "string"},
                                    {"id": "uom consumption","header":["Uom Consumption",{content:"textFilter"}],"sort": "string"},
                                    {"id": "category","header":["Category",{content:"textFilter"}],"sort": "string"},
                                    {"id": "vendor type","header": ["Vendor Type",{content:"textFilter"}],"sort": "string"},
                                    {"id": "status","header":["Status",{content:"textFilter"}],"sort": "string"},
                                    {"id": "detail","header":["Detail",{content:"textFilter"}],"sort": "string"},
                                            ],
                                "view": "datatable",
                                "borderless": 1,
                                "columnWidth": 140,
                                "multiselect": true,
                                "resizeColumn": true,
                                "resizeRow": true,
                                "areaselect": true,
                                "height": 330,
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
                            }
                        ]
                    }
                ]
            }
        ]
    };

    return {
        $ui:ui
    };

});
