<?php

namespace App\Http\Controllers\Admin;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\ProductCategory;

class ProductCategoryController extends Controller
{
    public function getList() {
        $productCategories = ProductCategory::all();
        $result = (object)[
            "status" => 202,
            "categories" => $productCategories
        ];
        return json_encode($result);
    }
    public function upload(Request $request) {
        $productCategory = new ProductCategory;
        $productCategory->name = $request->all()['name'];
        $productCategory->description = $request->all()['description'];
        $productCategory->save();
        $result = (object)[
            "status" => 202,
            "response" => "success"
        ];
        return json_encode($result);
    }
}
