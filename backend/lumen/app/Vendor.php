<?php
namespace App;
use Illuminate\Database\Eloquent\Model;

class Vendor extends Model
{   
    protected $connection = 'mysql';

    
    protected $table = "vendors";
    protected $fillable = ['code','name'];
    public $primaryKey = "id";
    public $timestamps = false;

    public function catalogs(){
        return $this->hasMany('App/Catalog');
    }

    public function vendor_ref(){
        return $this->hasOne('App/Catalog')->where('vendor_rev', 'name');
    }

    //public function vendor_komp(){
    //    return $this->hasOne('App/Catalog')->where('vendor_komp', 'name');
   // }

}
