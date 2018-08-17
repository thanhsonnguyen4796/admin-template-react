@extends('layouts.admin')

@section('header')
    <title>Pixio Studio | Upload Product</title>
    <script>
        var csrf_token = '<?php echo csrf_token(); ?>';
    </script>
@endsection

@section('content')
    <div id="upload-product-wrap"></div>
@endsection

@section('footer-script')
    <script src="{{ asset('js/product/UploadProductPage.js') }}"></script>
@endsection
