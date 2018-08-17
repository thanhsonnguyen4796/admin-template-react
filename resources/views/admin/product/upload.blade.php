@extends('layouts.admin')

@section('header')
    <title>Pixio Studio | Upload Product</title>
@endsection

@section('content')
    <div id="upload-product-wrap"></div>
@endsection

@section('footer-script')
    <script src="{{ asset('js/product/upload.js') }}"></script>
@endsection
