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
                    {"view": "text","label": "Requestor","name": "user","height": 32,"labelWidth": 115,"placeholder": ""},
                    {"cols": [
                    {"view": "text","label": "Draft No","name": "draft_no","height": 32,"labelWidth": 115,"placeholder": "","width": 225},
                    {"view": "text","label": "YPMI Kode","name": "part_number","height": 32,"labelWidth": 80,"labelAlign": "center","placeholder": ""},
                    ]},
                    {"view": "text","label": "Part Name","name": "part_name","height": 32,"labelWidth": 115,"placeholder": ""},
                    {"view": "text","label": "Size","name": "size","height": 32,"labelWidth": 115,"placeholder": ""},
                    {"view": "text","label": "Type","name": "type_name","height": 32,"labelWidth": 115,"placeholder": ""},
                    {"view": "text","label": "Brand","name": "brand","height": 32,"labelWidth": 115,"placeholder": ""},
                    {"cols": [
                    {"view": "text","label": "Color","name": "color","height": 32,"labelWidth": 115,"placeholder": ""},
                    {"view": "text","label": "Ref. HS Code","name": "hs_code","height": 32,"labelWidth": 115,"labelAlign": "center","placeholder": ""},
                    ]},
                    {"cols": [
                    {"view": "text","label": "Ref. kode Reguler","placeholder": "","name": "ref_reguler","labelWidth": 115},
                    {"view": "text","label": "Ref. kode Trial","placeholder": "","name": "ref_trial","labelAlign": "center","labelWidth": 115},
                    ]},
                    {"cols": [
                    {"view": "text","label": "Uom Consumption","placeholder": "","name": "uom_cons","labelWidth": 115},
                    {"view": "text","label": "Category","placeholder": "","name": "category","labelAlign": "center","labelWidth": 115},
                    ]},
                    {"cols": [
                    {"view": "text","label": "Uom Purchasing","placeholder": "","name": "uom_purch","labelWidth": 115},
                    {"view": "text","label": "Sub Group","placeholder": "","name": "sub_id","labelAlign": "center","labelWidth": 115},
                    ]},
                    {"cols": [
                    {"view": "text","label": "Standar Packing","name": "standar_packing","height": 32,"labelWidth": 115,"placeholder": ""},
                    {"view": "text","label": "Vendor Type","placeholder": "","name": "vendor_type","labelAlign": "center","labelWidth": 115},
                    ]},
                    {"cols": [
                    {"view": "text","label": "Minimal Order Qty","name": "minimal_order","height": 32,"labelWidth": 115,"placeholder": ""}, 
                    {"view": "text","label": "Jenis Kode","placeholder": "","name": "jenis_kode","labelAlign": "center","labelWidth": 115},
                    ]},
                    {"cols": [
                    {"view": "text","label": "Warehouse Lokasi","name": "wh_lokasi","height": 32,"labelWidth": 115,"placeholder": ""},
                    {"view": "text","label": "Safety Stok","name": "safety_stok","height": 32,"labelAlign": "center","labelWidth": 115,"placeholder": ""},
                    ]},
                    {"view": "text","label": "Vndr Ref. Name","name": "vendor_ref","height": 32,"labelWidth": 115,"placeholder": ""},
                    {"view": "text","label": "Vndr Ref. Kode","name": "kode_ref","height": 32,"labelWidth": 115,"placeholder": ""},
                    {"cols": [
                    {"view": "text","label": "Currency Ref.","name": "curr_ref","height": 32,"labelWidth": 115,"placeholder": ""},
                    {"view": "text","label": "Currency Komp.","name": "curr_komp","height": 32,"labelAlign": "center","labelWidth": 115,"placeholder": ""},
                    ]},
                    {"cols": [
                    {"view": "text","label": "Quotation Ref.","name": "quo_no","height": 32,"labelWidth": 115,"placeholder": ""},
                    {"view": "text","label": "Komparasi Price","name": "price_komp","height": 32,"labelWidth": 115,"labelAlign": "center","placeholder": ""}
                    ]},
                    {"cols": [
                    {"view": "text","label": "Price After Nego","name": "nego_ref","height": 32,"labelWidth": 115,"placeholder": ""},
                    {"view": "text","label": "Komparasi Nego","name": "nego_komp","height": 32,"labelWidth": 115,"labelAlign": "center","placeholder": ""},
                    ]},
                    {"view": "text","label": "Vndr Komp. Name","name": "vendor_komp","height": 32,"labelWidth": 115,"placeholder": ""},
                    {"view": "text","label": "Vndr Komp. Kode","name": "kode_komp","height": 32,"labelWidth": 115,"placeholder": ""},
                    {"view": "text","label": "Fungsi Barang","name": "fungsi","height": 32,"labelWidth": 115,"placeholder": ""},
                    {"view": "text","label": "Keterangan","name": "remark","height": 32,"labelWidth": 115,"placeholder": ""},
                        ],
			},	
			{rows:[
				{view:"label",css:{'color':"",'font-weight':"bold",'font-size':"13px"},label:"Foto produk / part :",readonly:true},			
				{  
					"view":"template",
					id:"tmp",
				  	"template":"<img src='"+url+"katalog/#foto#' width='350' height='350'> ", 
				  	width:360, height:360,
				  
				},
				{view:"label",css:{'color':"",'font-weight':"bold",'font-size':"13px"},label:"History update :"},                
                        
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
 