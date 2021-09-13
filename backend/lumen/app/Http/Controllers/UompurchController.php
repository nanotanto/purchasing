<?php

namespace App\Http\Controllers;

use App\Uompurch;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class UompurchController extends Controller
{
    public function uom(){
        $uom = Uompurch::select('name as value', 'id')->get();
        return response()->json($uom);
    }
}