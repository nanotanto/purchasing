define([
], function() {
    
    var ui = {
        "rows": [
            {"cols":    [
                    
                    {"width": 0,"rows": [                          
                            {"height": 41,
                            "cols": [
                                {"label": "Options","value": "One","options": ["Reguler"," Service"," Trial"],"view": "radio","height": 0,"width": 0,"labelAlign": "center"}
                                    ]
                            },
    
                            {"url": "demo->5f042ed11c5a070012ac942ekatalog",
                                "columns": [
                                    {"id": "part number","header":["Part Number",{content:"textFilter"}],"fillspace": true,"sort": "string"},
                                    {"id": "draft no","header":["Draft No",{content:"textFilter"}],"sort": "string"},
                                    {"id": "part name","header":["Part Name",{content:"textFilter"}],"sort": "string"},
                                    {"id": "size","header":["Size",{content:"textFilter"}],"sort": "string"},
                                    {"id": "color","header":["Color",{content:"textFilter"}],"sort": "string"},
                                    {"id": "brand","header":["Brand",{content:"textFilter"}],"sort": "string"},
                                    {"id": "type","header": ["Type",{content:"textFilter"}],"sort": "string"},
                                    {"id": "uom consumption","header":["Uom Consumption",{content:"textFilter"}],"sort": "string"},
                                    {"id": "category","header":["Category",{content:"textFilter"}],"sort": "string"},
                                    {"id": "vendor type","header": ["Vendor Type",{content:"textFilter"}],"sort": "string"},
                                    {"id": "status","header":["Status",{content:"textFilter"}],"sort": "string"}
                                           ],
                                "view": "datatable",
                                "borderless": 1,
                                "columnWidth": 140,
                                "multiselect": true,
                                "resizeColumn": true,
                                "resizeRow": true,
                                "areaselect": true,
                                "height": 720,
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

