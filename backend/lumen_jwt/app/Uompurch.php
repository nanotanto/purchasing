<?php
namespace App;
use Illuminate\Database\Eloquent\Model;

class Uompurch extends Model
{   
    protected $connection = 'mysql';

    protected $table = "uompurchs";
    public $primaryKey = "id";
    public $timestamps = false;
}
