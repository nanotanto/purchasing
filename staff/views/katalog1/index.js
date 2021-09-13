define([
], function() {
    
    var ui = {
        "rows": [
            {"cols":    [
                    {"width": 0,"rows": [                          
                            {"height": 30,
                            "cols": [
                                {"label": "Options","value": "One","options": ["Reguler"," Service"," Trial"],"view": "radio","height": 0,"width": 0,"labelAlign": "center"},
                                {view: "button", label: "Download Data","width": 150, inputHeight: 30, click: function() {$$("upl1").send(function(response){if(response) webix.message(response.status);});}},
                                {view: "label", label: "", width: 20}
                                    ]
                            },
    
                            {"url": "demo->5f042ed11c5a070012ac942ekatalog",
                                "columns": [
                                    {"id": "detail","header":"","width":40,"sort": "string"},
                                    {"id": "request date","header": ["Request Date",{content:"textFilter"}],"sort": "string"},
                                    {"id": "submit date","header": ["Submit Date",{content:"textFilter"}],"sort": "string"},
                                    {"id": "appr yimm date","header": ["Appr YIMM Date",{content:"textFilter"}],"sort": "string"},
                                    {"id": "submit price date","header": ["Submit Price Date",{content:"textFilter"}],"sort": "string"},
                                    {"id": "approve date","header": ["Approve Date",{content:"textFilter"}],"sort": "string"},
                                    {"id": "part number","header":["Part Number",{content:"textFilter"}],"sort": "string"},
                                    {"id": "draft no","header":["Draft No",{content:"textFilter"}],"sort": "string"},
                                    {"id": "part name","header":["Part Name",{content:"textFilter"}],"sort": "string"},
                                    {"id": "size","header":["Size",{content:"textFilter"}],"sort": "string"},
                                    {"id": "color","header":["Color",{content:"textFilter"}],"sort": "string"},
                                    {"id": "brand","header":["Brand",{content:"textFilter"}],"sort": "string"},
                                    {"id": "type","header": ["Type",{content:"textFilter"}],"sort": "string"},
                                    {"id": "category","header":["Category",{content:"textFilter"}],"sort": "string"},
                                    {"id": "vendor type","header": ["Vendor Type",{content:"textFilter"}],"sort": "string"},
                                    {"id": "jenis kode","header": ["Jenis Kode",{content:"textFilter"}],"sort": "string"}, 
                                    {"id": "status","header":["Status",{content:"textFilter"}],"sort": "string"}
                                    
                                           ],
                                "view": "datatable",
                                "borderless": 1,
                                "columnWidth": 140,
                                "multiselect": true,
                                "resizeColumn": true,
                                "resizeRow": true,
                                "areaselect": true,
                                "height": 820,
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
                                "scroll": "xy"
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

