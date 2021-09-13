<?php
namespace App;
use Illuminate\Database\Eloquent\Model;


class Catalog extends Model
{
    protected $connection = 'mysql';
    
    
    protected $table = "catalogs";
    public $primaryKey = "id";
    
    //protected $fillable = [
    //    'id',  
    //    'user',  
    //    'email',  
    //    'part_name',  
    //    'size',  
    //    'type_name',  
    //    'brand',  
    //    'color',  
    //    'hs_code',  
    //    'ref_reguler',  
    //    'ref_trial',  
    //    'category',  
    //    'product_group',  
    //    'sub_group',  
    //    'uom_cons',  
    //    'vendor_type',  
    //    'jenis_kode',  
    //    'wh_lokasi',  
    //    'safety_stok',  
    //    'fungsi',
        
    //];

    protected $fillable = [
    'id', 'status', 'old_partno', 'request_date', 'cek_date', 'ref_reguler', 'ref_trial', 'wh_lokasi', 'safety_stok', 'kode_ref', 'price_ref', 'kode_komp', 'user', 'email', 'fungsi', 'draft_no', 'part_number', 'part_name', 'size', 'type_name', 'brand', 'quo_no', 'color', 'hs_code', 'category', 'product_group', 'sub_group', 'uom_id', 'uompurch_id', 'standar_packing', 'vendor_type', 'minimal_order', 'jenis_kode', 'vendor_komp', 'vendor_ref', 'curr_ref', 'curr_komp', 'price_komp', 'nego_ref', 'nego_komp', 'submit_date', 'yimm_date', 'price_date', 'activation_date', 'quotation', 'msds', 'foto', 'drawing', 'remark'
    ];



    //public $timestamps = false;

    public function category()
    {
        return $this->belongsTo(Category::class);
    }

    public function product()
    {
        return $this->belongsTo(Product::class);
    }

    public function sub()
    {
        return $this->belongsTo(Sub::class);
    }

    public function uom()
    {
        return $this->belongsTo(Uom::class);
    }

    public function uompurch()
    {
        return $this->belongsTo(Uom::class,'uompurch_id','id');
    }

    ///public function uompurch()
    //{
    //    return $this->belongsTo(Uompurch::class);
    //}

    public function vendorReferensi()
    {
        return $this->belongsTo(Vendor::class, 'vendor_ref', 'id');
    }

    public function vendorKomparasi()
    {
        return $this->belongsTo(Vendor::class, 'vendor_komp', 'id');
    }


    
}
