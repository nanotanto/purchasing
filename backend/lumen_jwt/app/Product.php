<?php
namespace App;
use Illuminate\Database\Eloquent\Model;


class Product extends Model
{
    protected $connection = 'mysql';
    
    
    protected $table = "products";
    public $primaryKey = "id";
    public $timestamps = false;

    
}
