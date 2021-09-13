<?php

namespace App\Http\Controllers;

use App\Product;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class ProductController extends Controller
{
    public function prod(){
        $prod = Product::select('name as value', 'id')->get();
        return response()->json($prod);
    }
}