define(function(){
	var text = "<div style='padding-left:15px'>"+
	"<left style='font-size:15px;font-weight:bold'>Flow Proses Pendaftaran Part Master :</left></br><img src='flowregister.jpg' alt='' width='700' height='200'></div></br>"+
    
    "<left style='font-size:15px;padding-left:15px;font-weight:bold'>Untuk proses pendaftaran kode, berikut syarat & kriteria yang perlu dipenuhi :</left></div></br>"+
	
	"<div style='text-align:justify;padding-left:15px'>"+
	"<ol>"+
		"<li>"+
			"Semua kolom wajib untuk di isi. "+
        "</li>"+
        "<li>"+
            "Sesuaikan dengan kategori, product kategori & sub category di dalam E-Proc System."+
		"</li>"+
        "<li>"+
            "Penawaran Harga yang sudah dimiliki, upload ke dalam aplikasi yang dipergunakan sebagai dasar referensi."+
		"</li>"+
		"<li>"+
			"Pendaftaran barang yang mengandung material B3 harus menyertakan MSDS Original & versi YPMI, dengan Form Chemical Judgement yg sudah di tanda tangan bagian Risk Control."+
		"</li>"+
		"<li>"+
			"Pendaftaran barang Import harus menyertakan nomor HS Data Code dari bagian Custom Clerance."+
		"</li>"+
		"<li>"+
			"Untuk pendaftaran kode baru lampirkan drawing/foto barang dalam format PDF."+
		"</li>"+
		"<li>"+
			"Bila part yang di registrasi merupakan part improve, mohon untuk mencantumkan kode E-Proc part yang sebelumnya."+
		"</li>"+
		"<li>"+
			"Jika melakukan penggantian part, perhatikan stok di WH dan vendor, untuk mengurangi dead stok yang timbul karena tidak terpakai."+
	"</ol>"+
	"</div>"+
	
	"<div style='padding-left:15px'>"+
	"<left style='font-size:15px;font-weight:bold'>Detail informasi kategori & sub kategori :</left></br><img src='kategori.jpg' alt='' width='1400' height='390'></div></br>"+
	"</div>"

	return {
		$ui:{
			type: "clean",
			rows:[
				
				{
					template: text
				//	scroll:"y"
				}
			]
			
			}				
		}
	});