<?php
namespace App;
use Illuminate\Database\Eloquent\Model;

class Uom extends Model
{   
    protected $connection = 'mysql';

    protected $table = "uoms";
    public $primaryKey = "id";
    public $timestamps = false;
}
