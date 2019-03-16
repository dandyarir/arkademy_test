<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use DB;
use App\Category;
use App\Http\Requests;
use App\Http\Controllers\Controller;

class CategoryController extends Controller {
//    public function index() {
//       $product = DB::select("SELECT categories.id,categories.name, GROUP_CONCAT(products.name) FROM products JOIN categories on categories.id = products.category_id GROUP BY categories.id");
//       return view('home',['cats'=>$product]);
//    }

   public function add(){
       return view('tambah');
   }

   public function index()
    {
        $datas = Category::with('product')->get();
        return view('home',compact('datas'));
    }
}