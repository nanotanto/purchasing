<?php

namespace App\Http\Controllers;

use App\Sub;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class SubController extends Controller
{
    public function index(){
        $sub = Sub::select('name as value', 'id')->get();
        return response()->json($sub);

    }

    public function sub($id){
        $sub = Sub::where("product_id", "=", "$id")->select('name as value', 'id')->get();
        return response()->json($sub);

    }
}