define([

],
function(){	

	var url = window.location.protocol +"//"+ window.location.hostname+ ":" +window.location.port + window.location.pathname;
	
	var form = {
		view:"form", 
		id:"myform",
		//width:400,
		cols:[
			{
				"rows": [
                    {readonly:true,"view": "text","label": "Requestor","name": "user","height": 32,"labelWidth": 115,"placeholder": ""},
                    {"cols": [
                    {readonly:true,"view": "text","label": "Draft No","name": "draft_no","height": 32,"labelWidth": 115,"placeholder": "","width": 225},
                    {readonly:true,"view": "text","label": "YPMI Kode","name": "part_number","height": 32,"labelWidth": 80,"labelAlign": "right","placeholder": ""},
                    ]},
                    {readonly:true,"view": "text","label": "Part Name","name": "part_name","height": 32,"labelWidth": 115,"placeholder": ""},
                    {readonly:true,"view": "text","label": "Size","name": "size","height": 32,"labelWidth": 115,"placeholder": ""},
                    {readonly:true,"view": "text","label": "Type","name": "type_name","height": 32,"labelWidth": 115,"placeholder": ""},
                    {readonly:true,"view": "text","label": "Brand","name": "brand","height": 32,"labelWidth": 115,"placeholder": ""},
                    {"cols": [
                    {readonly:true,"view": "text","label": "Color","name": "color","height": 32,"labelWidth": 115,"placeholder": ""},
                    {readonly:true,"view": "text","label": "Ref. HS Code","name": "hs_code","height": 32,"labelWidth": 115,"labelAlign": "right","placeholder": ""},
                    ]},
                    {"cols": [
                    {readonly:true,"view": "text","label": "Ref. kode Reguler","placeholder": "","name": "ref_reguler","labelWidth": 115},
                    {readonly:true,"view": "text","label": "Ref. kode Trial","placeholder": "","name": "ref_trial","labelAlign": "right","labelWidth": 115},
                    ]},
                    {"cols": [
                        {readonly:true,"label": "Uom Consumption",value:0,"name": "uom_id","options": url+"../backend/lumen/public/uom","view": "combo","height": 32,"labelAlign": "left","labelWidth": 115,validate:"isNotEmpty"},
                        //{"view": "text","label": "Uom Consumption","placeholder": "","name": "uom_id","labelWidth": 115},
                        {readonly:true,"label": "Category","name": "category_id","options": url+"../backend/lumen/public/ctg","view": "combo","height": 32,"labelAlign": "right","labelWidth": 115,validate:"isNotEmpty"},
                        //{"view": "text","label": "Category","placeholder": "","name": "category","labelAlign": "right","labelWidth": 115},
                    ]},
                    {"cols": [
                        {readonly:true,"label": "Uom Purchasing",value:0,"name": "uompurch_id","options": url+"../backend/lumen/public/uom","view": "combo","height": 32,"labelAlign": "left","labelWidth": 115},
                        //{"view": "text","label": "Uom Purchasing","placeholder": "","name": "uompurch_id","labelWidth": 115},
                        {readonly:true,id:"sub","label": "Sub Group",value:0,"name": "sub_id","options": url+"../backend/lumen/public/subIndex","view": "combo","height": 32,"labelAlign": "right","labelWidth": 115,validate:"isNotEmpty"},
                        //{"view": "text","label": "Sub Group","placeholder": "","name": "sub_id","labelAlign": "right","labelWidth": 115},
                    ]},
                    {"cols": [
                    {readonly:true,"view": "text","label": "Standar Packing","name": "standar_packing","height": 32,"labelWidth": 115,"placeholder": ""},
                    {readonly:true,"view": "text","label": "Vendor Type","placeholder": "","name": "vendor_type","labelAlign": "right","labelWidth": 115},
                    ]},
                    {"cols": [
                    {readonly:true,"view": "text","label": "Minimal Order Qty","name": "minimal_order","height": 32,"labelWidth": 115,"placeholder": ""}, 
                    {readonly:true,"view": "text","label": "Jenis Kode","placeholder": "","name": "jenis_kode","labelAlign": "right","labelWidth": 115},
                    ]},
                    {"cols": [
                    {readonly:true,"view": "text","label": "Warehouse Lokasi","name": "wh_lokasi","height": 32,"labelWidth": 115,"placeholder": ""},
                    {readonly:true,"view": "text","label": "Safety Stok","name": "safety_stok","height": 32,"labelAlign": "right","labelWidth": 115,"placeholder": ""},
                    ]},
                    {readonly:true,id:"vendor_ref","view": "combo",  options:url+"../backend/lumen/public/vendor",
                        "label": "Vndr Name Ref.","name": "vendor_ref","height": 32,"labelWidth": 115,"placeholder": ""},
                    //{"view": "text","label": "Vndr Ref. Name","name": "vendor_ref","height": 32,"labelWidth": 115,"placeholder": ""},
                    {readonly:true,id:"kode_ref","view": "select","options": url+"../backend/lumen/public/vendorKode","label": "Vndr Ref. Kode","name": "kode_ref","height": 32,"labelWidth": 115,"placeholder": ""},
                    //{"view": "text","label": "Vndr Ref. Kode","name": "kode_ref","height": 32,"labelWidth": 115,"placeholder": ""},
                    {"cols": [
                    {readonly:true,"view": "text","label": "Currency Ref.","name": "curr_ref","height": 32,"labelWidth": 115,"placeholder": ""},
                    {readonly:true,"view": "text","label": "Currency Komp.","name": "curr_komp","height": 32,"labelAlign": "right","labelWidth": 115,"placeholder": ""},
                    ]},
                    {"cols": [
                    {readonly:true,"view": "text","label": "Quotation Ref.","name": "quo_no","height": 32,"labelWidth": 115,"placeholder": ""},
                    {readonly:true,"view": "text","label": "Komparasi Price","name": "price_komp","height": 32,"labelWidth": 115,"labelAlign": "right","placeholder": ""}
                    ]},
                    {"cols": [
                    {readonly:true,"view": "text","label": "Price After Nego","name": "nego_ref","height": 32,"labelWidth": 115,"placeholder": ""},
                    {readonly:true,"view": "text","label": "Komparasi Nego","name": "nego_komp","height": 32,"labelWidth": 115,"labelAlign": "right","placeholder": ""},
                    ]},
                    {readonly:true,id:"vendor_komp","view": "combo",  options:url+"../backend/lumen/public/vendor",
                        "label": "Vndr Komp. Name.","name": "vendor_komp","height": 32,"labelWidth": 115,"placeholder": ""},
                    //{"view": "text","label": "Vndr Ref. Name","name": "vendor_ref","height": 32,"labelWidth": 115,"placeholder": ""},
                    {readonly:true,id:"kode_komp","view": "select","options": url+"../backend/lumen/public/vendorKode","label": "Vndr Komp. Kode","name": "kode_komp","height": 32,"labelWidth": 115,"placeholder": ""},
                    //{"view": "text","label": "Vndr Ref. Kode","name": "kode_ref","height": 32,"labelWidth": 115,"placeholder": ""},
                    //{"view": "text","label": "Vndr Komp. Name","name": "vendor_komp","height": 32,"labelWidth": 115,"placeholder": ""},
                    //{"view": "text","label": "Vndr Komp. Kode","name": "kode_komp","height": 32,"labelWidth": 115,"placeholder": ""},
                    {readonly:true,"view": "text","label": "Fungsi Barang","name": "fungsi","height": 32,"labelWidth": 115,"placeholder": ""},
                    {readonly:true,"view": "text","label": "Keterangan","name": "remark","height": 32,"labelWidth": 115,"placeholder": ""},
                        ],
			},	
			{rows:[
				{view:"label",css:{'color':"",'font-weight':"bold",'font-size':"13px"},label:"Foto produk / part :",readonly:true},			
				{  
					"view":"template",
					id:"tmp",
				  	"template":"<img src='"+url+"../katalog/#foto#' width='350' height='350'> ", 
				  	width:360, height:360,
				  
                },
                
                {"cols": [
                {view: "uploader",name:"foto", id:"upl3", autosend:true, value: 'Upload Foto Part - jpg',accept:"image/png, image/gif, image/jpeg, image/jpg", link:"mylist3", upload:url+"../backend/lumen/public/uploadfile","height": 30},
                
                {view: "button", label: "Save","height": 32, click: function() {
                                                                         
                        var data = $$("myform").getValues();
                            //send data to server
                            webix.ajax().put(url+"../backend/lumen/public/updateFoto", data).then(() => webix.message("Saved"));

                            //$$("myform").clear();   
                            //$$("myform").load(url+"../backend/lumen/public/detail/"+id);
                        
        }           
        },
                ]},
                {view:"list",  id:"mylist3", type:"uploader",autoheight:true, borderless:true},

                {view:"label",css:{'color':"",'font-weight':"bold",'font-size':"13px"},label:"History update :"},     
                {view:"datatable",
                    id: "tbl_log",
                    resizeColumn:true,
                    resizeRow:true,
                    select:true,
                    editable:true,	
                    fixedRowHeight:false,
                    scheme:{
                        $init:function(row){
                            row.index = this.count(); 
                        }
                    },
                    columns:[
                        { id:"index",   header:"",  width:30,         sort:"int"},
                        { 
                            id:"id", 
                            hidden:true
                        },
                        { 
                            id:"catalog_id",	
                            hidden:true,
                            header:["Catalog. ID"], 
                            width:180,	 
                        },
                        { 
                            id:"user_name",  
                            header:["Staff ID"], 
                            width:280
                        },

                        ]
                    }          
                        
				//{id:"foto", name:"foto",view:"template", width:300, height:300,"margin": 10,readonly:true}
			]},
			
		],
		
		scroll:true 
	};


	return {
		$ui:{
			//type:"space",
			cols:[
				form				
				]
		}
	};
});
 