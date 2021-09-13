define([], function() {

    var url = window.location.protocol +"//"+ window.location.hostname+ ":" +window.location.port + window.location.pathname;
    
     return {
        $ui: {"rows": [
            {"cols": [
                {view:"label",css:{'color':"gray",'font-weight':"bold",'font-size':"14px"},label:"Status pendaftaran kode baru :"},
                {view:"button", label: "Filter Data", popup:"my_pop", "width": 150}, 
                {view: "button", label: "Download Data","width": 150,  click: function() {webix.toExcel($$("table_register"));}},
                {view: "label", label: "", width: 20}    
            ]},
            //{view:"label",css:{'color':"gray",'font-weight':"bold",'font-size':"14px"},label:"Status pendaftaran kode baru :"},
                                
            {"url": url+"../backend/lumen/public/register",
            scheme:{
                $init:function(row){
                    row.index = this.count(); 
                    row.category_id = (row.category || "") && row.category.name;
                    row.uom_id = (row.uom || "") && row.uom.name;
                    row.product_id = (row.product || "") && row.product.name;
                    row.sub_id = (row.sub || "") && row.sub.name;
					row.vendor_ref = (row.vendor_referensi || "") && row.vendor_referensi.name
                    row.kode_ref = (row.vendor_referensi || "") && row.vendor_referensi.code
                }
            },
            "columns": [
                { id:"index",   header:"",  width:30,         sort:"int"},
                { id:"quotation",	header:["Quot",{ content:"textFilter"}], sort:"server",	width:50,	 template:"<a class='link' target='_blank' href='"+url+"../pdf/web/viewer.html?file=../../katalog/#quotation#'>View</a>"},
                { id:"msds",	header:["MSDS",{ content:"textFilter"}], sort:"server",	width:50,	 template:"<a class='link' target='_blank' href='"+url+"../pdf/web/viewer.html?file=../../katalog/#msds#'>View</a>"},
                { id:"foto",	header:["Foto",{ content:"textFilter"}], sort:"server",	width:50,	 template:"<a class='link' target='_blank' href='"+url+"../katalog/#foto#'>View</a>"},
                { id:"drawing",	header:["Drawing",{ content:"textFilter"}], sort:"server",	width:70,	 template:"<a class='link' target='_blank' href='"+url+"../katalog/#drawing#'>View</a>"},
                {"id": "wh_lokasi","header": [{text:"WH Lokasi", css:{"text-align":"center"} },{content:"textFilter"}],"sort": "server",width:80},
                {"id": "ref_reguler","header":[{text:"Ref. Kode Reguler", css:{"text-align":"center"} },{content:"textFilter"}],"sort": "server"},
                {"id": "draft_no","header":[{text:"Draft No", css:{"text-align":"center"} },{content:"textFilter"}],"sort": "server",width:80},
                {"id": "part_number","header":[{text:"YPMI Code", css:{"text-align":"center"} },{content:"textFilter"}],"sort": "server"},
                {"id": "part_name","header":[{text:"Part Name", css:{"text-align":"center"} },{content:"textFilter"}],"sort": "server"},
                    {"id": "size","header":[{text:"Size", css:{"text-align":"center"} },{content:"textFilter"}],"sort": "server"},
                    {"id": "color","header":[{text:"Color", css:{"text-align":"center"} },{content:"textFilter"}],"sort": "server",width:80},
                    {"id": "brand","header":[{text:"Brand", css:{"text-align":"center"} },{content:"textFilter"}],"sort": "server"},
                    {"id": "type_name","header": [{text:"Type", css:{"text-align":"center"} },{content:"textFilter"}],"sort": "server"},
                    {"id": "vendor_ref","header": [{text:"Vendor Referensi", css:{"text-align":"center"} },{content:"textFilter"}],"sort": "server"},
                                    {"id": "kode_ref","header": [{text:"Vendor Kode Referensi", css:{"text-align":"center"} },{content:"textFilter"}],"sort": "server"},
                                    {"id": "curr_ref","header": [{text:"Curr", css:{"text-align":"center"} },{content:"textFilter"}],"sort": "server",width:60},
                                    {"id": "price_ref",numberFormat:"1.111,00","header": [{text:"Price Referensi", css:{"text-align":"center"} },{content:"textFilter"}],"sort": "server"},         
                {"id": "jenis_kode","header":[{text:"Jenis Kode", css:{"text-align":"center"} },{content:"textFilter"}],"sort": "server",width:110},
                {"id": "status","header":[{text:"Status", css:{"text-align":"center"} },{content:"textFilter"}],"sort": "server",width:100},
                    {"id": "ref_trial","header":[{text:"Ref. Kode Trial", css:{"text-align":"center"} },{content:"textFilter"}],"sort": "server",width:100},
                    {"id": "hs_code","header":[{text:"HS Code", css:{"text-align":"center"} },{content:"textFilter"}],"sort": "server",width:100},
                    {"id": "uom_id","header":[{text:"Uom Consumption", css:{"text-align":"center"} },{content:"textFilter"}],"sort": "server"},
                    {"id": "category_id","header":[{text:"Category", css:{"text-align":"center"} },{content:"textFilter"}],"sort": "server"},
                    {"id": "product_id","header":[{text:"Produk Group", css:{"text-align":"center"} },{content:"textFilter"}],"sort": "server"},
                    {"id": "sub_id","header":[{text:"Sub Group", css:{"text-align":"center"} },{content:"textFilter"}],"sort": "server"},
                    {"id": "vendor_type","header": [{text:"Vendor Type", css:{"text-align":"center"} },{content:"textFilter"}],"sort": "server",width:100},					
                    {"id": "quo_no","header": [{text:"Quotation No.", css:{"text-align":"center"} },{content:"textFilter"}],"sort": "server"}, 
                    {"id": "safety_stok","header": [{text:"Safety Stok", css:{"text-align":"center"} },{content:"textFilter"}],"sort": "server",width:90},
                    {"id": "user","header":[{text:"User Name", css:{"text-align":"center"} },{content:"textFilter"}],"sort": "server"},
                    {"id": "email","header":[{text:"Email User", css:{"text-align":"center"} },{content:"textFilter"}],"sort": "server"},
                    {"id": "fungsi","header":[{text:"Fungsi Part", css:{"text-align":"center"} },{content:"textFilter"}],"sort": "server"},
                    {"id": "request_date","header": [{text:"Request Date", css:{"text-align":"center"} },{content:"textFilter"}],"sort": "server",width:110},
                    {"id": "submit_date","header": [{text:"Submit Date", css:{"text-align":"center"} },{content:"textFilter"}],"sort": "server",width:110},
                    {"id": "yimm_date","header": [{text:"Approve YIMM Date", css:{"text-align":"center"} },{content:"textFilter"}],"sort": "server",width:110},
                    {"id": "price_date","header": [{text:"Submit Price Date", css:{"text-align":"center"} },{content:"textFilter"}],"sort": "server",width:110},
                    {"id": "activation_date","header": [{text:"Activation Date", css:{"text-align":"center"} },{content:"textFilter"}],"sort": "server",width:110},
                    {"id": "nego_ref",numberFormat:"1.111,00","header": [{text:"Nego Referensi", css:{"text-align":"center"} },{content:"textFilter"}],"sort": "server"},
                            ],
                    "view": "datatable",
                    "borderless": true,
                    "columnWidth": 140,
                    "multiselect": true,
                    "resizeColumn": true,
                    "resizeRow": true,
                    "areaselect": true,
                    "height": 700,
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
                    //"autowidth": true,
                    on:{
                        onAfterSelect:function(id){
                            $$("myform_reg").load(url+"../backend/lumen/public/regFind/"+id);                                                       
                        }
                    }
            },
            //{
            //    rows:[
            //        {id:"myform_reg","autoheight": true,"view": "form","borderless": true,
            //            rows:[
            //                {view:"label", label:"Catatan alasan pembatalan registrasi kode (Cancel):"},
            //                {id:"remark", name:"remark", view:"textarea", readonly:false, height:100}
            //            ]
            //        }
            //    ]
            //}
        ]}
    };

});
