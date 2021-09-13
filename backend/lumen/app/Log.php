<?php
namespace App;
use Illuminate\Database\Eloquent\Model;


class Log extends Model
{
    protected $connection = 'mysql2';

    //public $timestamps = false;
    protected $table = "logs";
    protected $fillable = ['catalog_id', 
                          'user_name'
                        ];
    

}
