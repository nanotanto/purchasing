<?php
namespace App;
use Illuminate\Database\Eloquent\Model;


class Sub extends Model
{
    protected $connection = 'mysql';
    
    
    protected $table = "subs";
    public $primaryKey = "id";
    public $timestamps = false;

    
}
