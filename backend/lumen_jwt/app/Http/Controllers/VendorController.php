<?php

namespace App\Http\Controllers;

use App\Vendor;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class VendorController extends Controller
{
    public function vendor(){
        $data = Vendor::select('name as value', 'id')->get();
        return response()->json($data);
    }

    public function find($id){
        $data = Vendor::select('code as value', 'id')->find($id);             
        return response()->json($data);
    }

    public function kode(){
        $data = Vendor::select('code as value', 'id')->get();          
        return response()->json($data);
    }
}