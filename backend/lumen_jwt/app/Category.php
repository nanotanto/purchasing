<?php
namespace App;
use Illuminate\Database\Eloquent\Model;


class Category extends Model
{
    protected $connection = 'mysql';
    
    
    protected $table = "categories";
    public $primaryKey = "id";
    public $timestamps = false;

    
}
