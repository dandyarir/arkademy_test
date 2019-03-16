<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use DB;
use App\Http\Requests;
use App\Http\Controllers\Controller;

class CategoryController extends Controller {
   public function index() {
      $product = DB::select("select categories.id, categories.name as category_name, products.name as product
      from products JOIN categories
      on products.category_id = categories.id");
      return view('home',['cats'=>$product]);
   }

   public function add(){
       return view('tambah');
   }
}