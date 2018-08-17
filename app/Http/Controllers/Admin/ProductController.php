<?php

namespace App\Http\Controllers\Admin;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class ProductController extends Controller
{
    public function category() {
        return view('admin.product.manage-category');
    }

    public function newProduct() {
        return view('admin.product.upload');
    }
}
