<?php

namespace App\Http\Controllers;

use App\Vendor;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class VendorController extends Controller
{
    public function index(){
        $data = Vendor::all();
        return response()->json($data);
    }

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

    public function addVendor(Request $request){
        Vendor::create($request->all());
    }

    public function updateVendor(Request $request, $id){
        $vendor = Vendor::findOrFail($id);
        $vendor->code = $request->input["code"];
        $vendor->name = $request->input["name"];
        $claim->save();
    }

    public function findName(){
        $data = Vendor::where('name', '')->orderBy('id','desc')->get();             
        return response()->json($data);
    }

    public function delete($id){
        $vendor = Vendor::findOrFail($id);
        $vendor->delete();
    }


}