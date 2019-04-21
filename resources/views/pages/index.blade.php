@extends('layouts.default')

@section('content')
<div class="container-center h100-vh">
    <div class="jumbotron">
        <h1 data-animation="typewriter">Hi, i'm a bot and still pure...</h1>
        <h2>There's box down there. You can say hi too.</h2>
    </div>
</div>

@include('components.footer',['position'=>'fixed'])

@endsection
