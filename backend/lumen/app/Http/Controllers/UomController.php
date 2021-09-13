<?php

namespace App\Http\Controllers;

use App\Uom;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class UomController extends Controller
{
    public function uom(){
        $uom = Uom::select('name as value', 'id')->get();
        return response()->json($uom);
    }
}