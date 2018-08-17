@extends('layouts.admin')

@section('header')
    <title>Pixio Studio | Product Category</title>
    <link href="{{ asset('css/plugins/footable/footable.core.css') }}" rel="stylesheet">
    <script>
        var csrf_token = '<?php echo csrf_token(); ?>';
    </script>
@endsection
@section('content')
    <div id="product-category-wrap">

    </div>
@endsection

@section('footer-script')
    <script src="{{ asset('js/plugins/footable/footable.all.min.js') }}"></script>
    <script src="{{ asset('js/product/ManageCategoryPage.js') }}"></script>
@endsection
