define([

],
function(){	

	var url = window.location.protocol +"//"+ window.location.hostname+ ":" +window.location.port + window.location.pathname;
	
	var form = {
		view:"form", 
		id:"myform",
		//width:400,
		cols:[
			{"rows": [
				{id:"user","view": "text","label": "Requestor","name": "user","height": 32,"labelWidth": 115,"placeholder": "",readonly:true},
				{"cols": [
				{id:"draft_no","view": "text","label": "Draft No","name": "draft_no","height": 32,"labelWidth": 115,"placeholder": "","width": 225,readonly:true},
				{id:"part_number","view": "text","label": "YPMI Kode","name": "part_number","height": 32,"labelWidth": 80,"labelAlign": "center","placeholder": "",readonly:true},
				]},
				{"view": "text","label": "Part Name","name": "part_name","height": 32,"labelWidth": 115,"placeholder": "",readonly:true},
				{"view": "text","label": "Size","name": "size","height": 32,"labelWidth": 115,"placeholder": "",readonly:true},
				{id:"type_name","view": "text","label": "Type","name": "type_name","height": 32,"labelWidth": 115,"placeholder": "",readonly:true},
				{"view": "text","label": "Brand","name": "brand","height": 32,"labelWidth": 115,"placeholder": "",readonly:true},
				{"cols": [
				{"view": "text","label": "Color","name": "color","height": 32,"labelWidth": 115,"placeholder": "",readonly:true},
				{"view": "text","label": "Ref. HS Code","name": "hs_code","height": 32,"labelWidth": 115,"labelAlign": "center","placeholder": "",readonly:true},
				]},
				{"cols": [
				{"view": "text","label": "Ref. kode Reguler","placeholder": "","name": "ref_reguler","labelWidth": 115,readonly:true},
				{"view": "text","label": "Ref. kode Trial","placeholder": "","name": "ref_trial","labelAlign": "center","labelWidth": 115,readonly:true},
				]},
				{"cols": [
				{"view": "text","label": "Uom Consumption","placeholder": "","name": "uom_cons","labelWidth": 115,readonly:true},
				{readonly:true,"label": "Category","name": "category_id","options": url+"backend/lumen/public/ctg","view": "combo","height": 32,"labelAlign": "right","labelWidth": 115,validate:"isNotEmpty"},
                        ]},
				{"cols": [
				{"view": "text","label": "Uom Purchasing","placeholder": "","name": "uom_purch","labelWidth": 115,readonly:true},
				{readonly:true,id:"sub","label": "Sub Group",value:0,"name": "sub_id","options": url+"backend/lumen/public/subIndex","view": "combo","height": 32,"labelAlign": "right","labelWidth": 115,validate:"isNotEmpty"},
                       ]},
				{"cols": [
				{"view": "text","label": "Standar Packing","name": "standar_packing","height": 32,"labelWidth": 115,"placeholder": "",readonly:true},
				{"view": "text","label": "Vendor Type","placeholder": "","name": "vendor_type","labelAlign": "center","labelWidth": 115,readonly:true},
				]},
				{"cols": [
				{"view": "text","label": "Minimal Order Qty","name": "minimal_order","height": 32,"labelWidth": 115,"placeholder": "",readonly:true}, 
				{"view": "text","label": "Jenis Kode","placeholder": "","name": "jenis_kode","labelAlign": "center","labelWidth": 115,readonly:true},
				]},
				{"cols": [
				{"view": "text","label": "Warehouse Lokasi","name": "wh_lokasi","height": 32,"labelWidth": 115,"placeholder": "",readonly:true},
				{"view": "text","label": "Safety Stok","name": "safety_stok","height": 32,"labelAlign": "center","labelWidth": 115,"placeholder": "",readonly:true},
				]},
				{"cols": [
				{"view": "text","label": "Tgl Request Kode","name": "request_date","height": 32,"labelWidth": 115,"placeholder": "",readonly:true},
				{"view": "text","label": "Tgl Submit Kode","name": "submit_date","height": 32,"labelAlign": "center","labelWidth": 115,"placeholder": "",readonly:true},
				]},
				{"cols": [
				{"view": "text","label": "Tgl Appr YIMM","name": "yimm_date","height": 32,"labelWidth": 115,"placeholder": "",readonly:true},
				{"view": "text","label": "Tgl Submit Harga","name": "price_date","height": 32,"labelAlign": "center","labelWidth": 115,"placeholder": "",readonly:true},
				]},
				{"view": "text","label": "Tgl Kode Aktif","name": "activation_date","height": 32,"labelWidth": 115,"placeholder": "",readonly:true},
				{"view": "text","label": "Fungsi Barang","name": "fungsi","height": 32,"labelWidth": 115,"placeholder": "",readonly:true},
			]},	
			{rows:[
				{view:"label",css:{'color':"",'font-weight':"bold",'font-size':"13px"},label:"Foto produk / part :",readonly:true},			
				{  
					"view":"template",
					id:"tmp",
				  	"template":"<img src='"+url+"katalog/#foto#' width='350' height='350'> ", 
				  	width:360, height:360,
				  
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
 