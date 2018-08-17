<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('admin.product.upload');
});

Route::get('/product/new-product', 'Admin\ProductController@newProduct');
Route::get('/product/category', 'Admin\ProductController@category');

Route::get('/api/productcategory/list', 'Admin\ProductCategoryController@getList');
Route::post('/api/productcategory/upload', 'Admin\ProductCategoryController@upload');
