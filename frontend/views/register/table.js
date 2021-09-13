define([], function() {

    var url = window.location.protocol +"//"+ window.location.hostname+ ":" +window.location.port + window.location.pathname;
    
     return {
        $ui: {"rows": [
            {view:"label",css:{'color':"gray",'font-weight':"bold",'font-size':"14px"},label:"Status pendaftaran kode baru :"},
                                
            {"url": url+"backend/lumen/public/register",
            scheme:{
                $init:function(row){
                    row.index = this.count(); 
                    row.category_id = (row.category || "") && row.category.name;
                    row.uom_id = (row.uom || "") && row.uom.name;
                }
            },
            "columns": [
                { id:"index",   header:"",  width:30,         sort:"int"},
                {"id": "status","header":[{text:"Status", css:{"text-align":"center"} },{content:"textFilter"}],"sort": "string",width:100},
                {"id": "user","header":[{text:"User Name", css:{"text-align":"center"} },{content:"textFilter"}],"sort": "string"},
                {"id": "draft_no","header":[{text:"Draft No", css:{"text-align":"center"} },{content:"textFilter"}],"sort": "string",width:80},
                {"id": "part_number","header":[{text:"Part No", css:{"text-align":"center"} },{content:"textFilter"}],"sort": "string"},
                {"id": "part_name","header":[{text:"Part Name", css:{"text-align":"center"} },{content:"textFilter"}],"sort": "string"},
                {"id": "size","header":[{text:"Size", css:{"text-align":"center"} },{content:"textFilter"}],"sort": "string"},
                {"id": "color","header":[{text:"Color", css:{"text-align":"center"} },{content:"textFilter"}],"sort": "string",width:80},
                {"id": "brand","header":[{text:"Brand", css:{"text-align":"center"} },{content:"textFilter"}],"sort": "string"},
                {"id": "type_name","header":[{text:"Type", css:{"text-align":"center"} },{content:"textFilter"}],"sort": "string"},
                {"id": "uom_id","header":[{text:"Uom Consumption", css:{"text-align":"center"} },{content:"textFilter"}],"sort": "string"},
                {"id": "category_id","header":[{text:"Category", css:{"text-align":"center"} },{content:"textFilter"}],"sort": "string"},
                {"id": "vendor_type","header":[{text:"Vendor Type", css:{"text-align":"center"} },{content:"textFilter"}],"sort": "string",width:93},
                {"id": "jenis_kode","header":[{text:"Jenis Kode", css:{"text-align":"center"} },{content:"textFilter"}],"sort": "string",width:110},
                {"id": "wh_lokasi","header": [{text:"WH Lokasi", css:{"text-align":"center"} },{content:"textFilter"}],"sort": "string",width:80},
                {"id": "hs_code","header":[{text:"HS Code", css:{"text-align":"center"} },{content:"textFilter"}],"sort": "string",width:100},
                {"id": "ref_reguler","header":[{text:"Ref. Kode Reguler", css:{"text-align":"center"} },{content:"textFilter"}],"sort": "string"},
                {"id": "ref_trial","header":[{text:"Ref. Kode Trial", css:{"text-align":"center"} },{content:"textFilter"}],"sort": "string",width:100},
                {"id": "request_date","header":[{text:"Request Date", css:{"text-align":"center"} },{content:"textFilter"}],"sort": "string",width:110},
                {"id": "submit_date","header":[{text:"Submit Date", css:{"text-align":"center"} },{content:"textFilter"}],"sort": "string",width:110},
                {"id": "yimm_date","header": [{text:"YIMM Date", css:{"text-align":"center"} },{content:"textFilter"}],"sort": "string",width:110},
                {"id": "price_date","header":[{text:"Price Date", css:{"text-align":"center"} },{content:"textFilter"}],"sort": "string",width:110},
                {"id": "activation_date","header":[{text:"Activation Date", css:{"text-align":"center"} },{content:"textFilter"}],"sort": "string",width:110},
                        ],
                    "view": "datatable",
                    "borderless": true,
                    "columnWidth": 140,
                    "multiselect": true,
                    "resizeColumn": true,
                    "resizeRow": true,
                    "areaselect": true,
                    "height": 550,
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
                    id:"table_register",
                   // paddingY:50
                    //"autowidth": true,
                    on:{
                        onAfterSelect:function(id){
                            //$$("myform_remark").load(url+"backend/lumen/public/regFind/"+id)
                        }
                    }
            },
            
            {view:"label",css:{'color':"red",'font-weight':"bold"},label:"Noted : Vendor & harga bisa berubah sesuai komparasi dan negosiasi Purchasing"},
            
                ]}
    };

});
