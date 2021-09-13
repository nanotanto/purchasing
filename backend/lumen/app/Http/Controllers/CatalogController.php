<?php

namespace App\Http\Controllers;

use App\Catalog;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class CatalogController extends Controller
{
    public function index(Request $request){
        // $data = Catalog::where('status','=','ACTIVE')->orderBy('id', 'DESC');
        $data = Catalog::where('status','=','ACTIVE')->with(['category','product','sub','uom','vendorReferensi','vendorKomparasi','uompurch'])->orderBy('id', 'DESC');
        $filter = $request->input('filter', false);
        $sort = $request->input('sort', false);

        //filtering
        if ($filter)
        foreach($filter as $key => $value){
            $data = $data->where($key, "like", "%$value%");
        }
        
        //sorting
        if ($sort)
        foreach($sort as $key => $value){
            $data = $data->orderBy($key, $value);
        }
        
        $total = $data->count();
        $start = $request->input('start', 0);
        $count = $request->input('count', 20);
        
        $data  = $data->limit($count)->offset($start)->get();
        
        return response()->json([
            "total_count" => $total,
            "pos" =>  $start,
            "data" => $data
        ]);
    }

    public function option(Request $request, $id){
        $data = Catalog::where('status','=','ACTIVE')->where('jenis_kode', '=', $id); 
        $filter = $request->input('filter', false);
        $sort = $request->input('sort', false);

        //filtering
        if ($filter)
        foreach($filter as $key => $value){
            $data = $data->where($key, "like", "%$value%");
        }
        
        //sorting
        if ($sort)
        foreach($sort as $key => $value){
            $data = $data->orderBy($key, $value);
        }
        
        $total = $data->count();
        $start = $request->input('start', 0);
        $count = $request->input('count', 20);
        
        $data  = $data->limit($count)->offset($start)->get();
        
        return response()->json([
            "total_count" => $total,
            "pos" =>  $start,
            "data" => $data
        ]);
    }

    public function detail($id){
        $cat  = Catalog::find($id);

        //return response()->json($cat); 

        return response()->json([
            "data" => $cat
        ]);
    }

    public function register(Request $request){
		
		//$data = Catalog::where('status','NON ACTIVE')->with(['category','product','sub','uom','vendorReferensi','vendorKomparasi','uompurch'])->orderBy('request_date', 'DESC')->get();  
        //return response()->json($data);
		
        $data = Catalog::where('status','NON ACTIVE')->with(['category','product','sub','uom','vendorReferensi','vendorKomparasi','uompurch'])->orderBy('request_date', 'DESC');  
        $filter = $request->input('filter', false);
        $sort = $request->input('sort', false);

        //filtering
        if ($filter)
        foreach($filter as $key => $value){
            $data = $data->where($key, "like", "%$value%");
        }
        
        //sorting
        if ($sort)
        foreach($sort as $key => $value){
            $data = $data->orderBy($key, $value);
        }
        
        $total = $data->count();
        $start = $request->input('start', 0);
        //$count = $request->input('count', 10);
        
        $data  = $data->limit($total)->offset($start)->get();
        
        return response()->json([
            "total_count" => $total,
            "pos" =>  $start,
            "data" => $data
        ]);
    }

    public function submitRegister(Request $request){
        $data = new Catalog();

        $data->user = $request->input('user');
        $data->email = $request->input('email');
        $data->part_name = $request->input('part_name');
        $data->size = $request->input('size');
        $data->type_name = $request->input('type_name');
        $data->brand = $request->input('brand');
        $data->color = $request->input('color');
        $data->hs_code = $request->input('hs_code');
        $data->ref_reguler = $request->input('ref_reguler');
        $data->ref_trial = $request->input('ref_trial');
        $data->category_id = $request->input('category_id');
        $data->product_id = $request->input('product_id');
        $data->sub_id = $request->input('sub_id');
        $data->uom_id = $request->input('uom_id');
        $data->vendor_type = $request->input('vendor_type');
        $data->jenis_kode = $request->input('jenis_kode');
        $data->quo_no = $request->input('quo_no');
        $data->vendor_ref = $request->input('vendor_ref');
        $data->kode_ref = $request->input('kode_ref');
        $data->curr_ref = $request->input('curr_ref');
        $data->price_ref = $request->input('price_ref');
        $data->wh_lokasi = $request->input('wh_lokasi');
        $data->safety_stok = $request->input('safety_stok');
        $data->fungsi = $request->input('fungsi');
        $data->status = "NON ACTIVE";
        $data->request_date = date("Y-m-d");
        $data->quotation = $request->input('quotation');
        $data->msds = $request->input('msds');
        $data->foto = $request->input('foto');
        $data->drawing = $request->input('drawing');
        $data->save();

        return response()->json(["status" => "ok"]);
    }

    public function CatalogAll(Request $request){
        $data = Catalog::where('status','=','ACTIVE')->get();         
        
        return response()->json($data);
    }
    
    public function CatalogFilter(Request $request){
        $from = $request->input('start');
        $to = $request->input('end');
        $data = Catalog::where('status','=','ACTIVE')
        ->with(['category','product','sub','uom','vendorReferensi','vendorKomparasi','uompurch'])->orderBy('id', 'DESC')
        ->whereBetween('activation_date', [$from, $to])
        ->get();
        
        return response()->json($data);
    }

    public function regFind($id){
        $data = Catalog::find($id);             
        return response()->json($data);
    }

    public function CatalogCancel(Request $request){
        $data = Catalog::where('status','=','CANCEL')->with(['category','product','sub','uom'])->get();         
        
        return response()->json($data);
    }

    public function updateRegister(Request $request){
        $data = Catalog::find($request->input("id"));
        $data->fill($request->all());

        if ($request->input("submit_date") == "") {            
            $data->submit_date = null;
        }else{
            $data->submit_date = $request->input("submit_date");
        }
        
        if ($request->input("yimm_date") == "") {            
            $data->yimm_date = null;
        }else{
            $data->yimm_date = $request->input("yimm_date");
        }

        if ($request->input("price_date") == "") {            
            $data->price_date = null;
        }else{
            $data->price_date = $request->input("price_date");
        }

        if ($request->input("activation_date") == "") {            
            $data->activation_date = null;
        }else{
            $data->activation_date = $request->input("activation_date");
        }

        $data->save();
				
        return response()->json(["status" => "ok"]);
    }

    public function cancel(Request $request){
        $data = Catalog::where('status','CANCEL')->with(['category','product','sub','uom'])->orderBy('request_date', 'DESC');  
        $filter = $request->input('filter', false);
        $sort = $request->input('sort', false);

        //filtering
        if ($filter)
        foreach($filter as $key => $value){
            $data = $data->where($key, "like", "%$value%");
        }
        
        //sorting
        if ($sort)
        foreach($sort as $key => $value){
            $data = $data->orderBy($key, $value);
        }
        
        $total = $data->count();
        $start = $request->input('start', 0);
        $count = $request->input('count', 20);
        
        $data  = $data->limit($count)->offset($start)->get();
        
        return response()->json([
            "total_count" => $total,
            "pos" =>  $start,
            "data" => $data
        ]);
    }

    public function updateFoto(Request $request){
        
        $data = Catalog::find($request->input("id"));
        $data->foto = $request->input("foto");
        $data->save();

        return response()->json(["status" => "ok"]);
    }

}