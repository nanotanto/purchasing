define([], function() {
    
    var ui = {
        "rows": [
            {"css": "webix_dark","view": "toolbar","height": 36,
                "cols": [
                    {"view": "label","label": "Detail Information","align": "center","gravity": 100,"height": 0,"inputWidth": 0,"inputHeight": 0,"borderless": true,"value": "0"}
                ]
            },
            {"cols": [
                {"autoheight": false,"view": "form","borderless": true,"height": 800,"width": 600,
                "rows": [
                    {"view": "text","label": "Requestor","name": "username","height": 32,"labelWidth": 115,"placeholder": ""},
                    {"cols": [
                    {"view": "text","label": "Draft No","name": "draft","height": 32,"labelWidth": 115,"placeholder": "","width": 225},
                    {"view": "text","label": "YPMI Kode","name": "kode","height": 32,"labelWidth": 80,"labelAlign": "center","placeholder": ""},
                    ]},
                    {"view": "text","label": "Part Name","name": "name","height": 32,"labelWidth": 115,"placeholder": ""},
                    {"view": "text","label": "Size","name": "size","height": 32,"labelWidth": 115,"placeholder": ""},
                    {"view": "text","label": "Type","name": "type","height": 32,"labelWidth": 115,"placeholder": ""},
                    {"view": "text","label": "Brand","name": "brand","height": 32,"labelWidth": 115,"placeholder": ""},
                    {"cols": [
                    {"view": "text","label": "Color","name": "color","height": 32,"labelWidth": 115,"placeholder": ""},
                    {"view": "text","label": "Ref. HS Code","name": "hscode","height": 32,"labelWidth": 115,"labelAlign": "center","placeholder": ""},
                    ]},
                    {"cols": [
                    {"view": "text","label": "Ref. kode Reguler","placeholder": "","name": "reguler","labelWidth": 115},
                    {"view": "text","label": "Ref. kode Trial","placeholder": "","name": "trial","labelAlign": "center","labelWidth": 115},
                    ]},
                    {"cols": [
                    {"view": "text","label": "Uom Consumption","placeholder": "","name": "consumption","labelWidth": 115},
                    {"view": "text","label": "Category","placeholder": "","name": "kategori","labelAlign": "center","labelWidth": 115},
                    ]},
                    {"cols": [
                    {"view": "text","label": "Uom Purchasing","placeholder": "","uompurchasing": "consumption","labelWidth": 115},
                    {"view": "text","label": "Sub Group","placeholder": "","name": "subgroup","labelAlign": "center","labelWidth": 115},
                    ]},
                    {"cols": [
                    {"view": "text","label": "Standar Packing","name": "standar packing","height": 32,"labelWidth": 115,"placeholder": ""},
                    {"view": "text","label": "Vendor Type","placeholder": "","name": "type","labelAlign": "center","labelWidth": 115},
                    ]},
                    {"cols": [
                    {"view": "text","label": "Minimal Order Qty","name": "minimal order","height": 32,"labelWidth": 115,"placeholder": ""}, 
                    {"view": "text","label": "Jenis Kode","placeholder": "","name": "jeniskode","labelAlign": "center","labelWidth": 115},
                    ]},
                    {"cols": [
                    {"view": "text","label": "Warehouse Lokasi","name": "lokasi","height": 32,"labelWidth": 115,"placeholder": ""},
                    {"view": "text","label": "Safety Stok","name": "safety","height": 32,"labelAlign": "center","labelWidth": 115,"placeholder": ""},
                    ]},
                    {"cols": [
                    {"view": "text","label": "Tgl Request Kode","name": "request","height": 32,"labelWidth": 115,"placeholder": ""},
                    {"view": "text","label": "Tgl Submit Kode","name": "submit kode","height": 32,"labelAlign": "center","labelWidth": 115,"placeholder": ""},
                    ]},
                    {"cols": [
                    {"view": "text","label": "Tgl Appr YIMM","name": "request","height": 32,"labelWidth": 115,"placeholder": ""},
                    {"view": "text","label": "Tgl Submit Harga","name": "submit kode","height": 32,"labelAlign": "center","labelWidth": 115,"placeholder": ""},
                    ]},
                    {"view": "text","label": "Tgl Kode Aktif","name": "request","height": 32,"labelWidth": 115,"placeholder": ""},
                    {"view": "text","label": "Fungsi Barang","name": "fungsi","height": 32,"labelWidth": 115,"placeholder": ""},
                        ],
                },
                {"autoheight": false,"view": "form","borderless": true,"width": 600,
                "rows": [
                    {view:"label",css:{'color':"",'font-weight':"bold",'font-size':"13px"},label:"Foto produk / part :"},
                        ],   
                    }
                ]
            }
        ],
        "gravity": 1,
        "borderless": true,
        "padding": {"top": 10,"bottom": 10,"left": 10,"right": 10},
        "type": "form",
        "margin": 10
    };

    return {
        $ui:ui
    };

});
