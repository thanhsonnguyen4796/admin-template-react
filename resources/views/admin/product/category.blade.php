@extends('layouts.admin')

@section('header')
    <title>Pixio Studio | Product Category</title>
    <link href="{{ asset('css/plugins/footable/footable.core.css') }}" rel="stylesheet">
@endsection
@section('content')
    <div id="product-category-wrap">

    </div>
@endsection

@section('footer-script')
    <script src="js/plugins/footable/footable.all.min.js"></script>
    <script>
        $(document).ready(function() {

            $('.footable').footable();

        });
    </script>
    <script src="{{ asset('js/product/manage-category.js') }}"></script>
@endsection
