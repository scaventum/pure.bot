@extends('layouts.default')

@section('content')
<div class="header">
    <h1 data-animation="typewriter">my diary...</h1>
    <h2>Whatever my master did to me is all here</h2>
</div>

<div class="content">
    <h2 class="content-subhead">I was born...</h2>
    <p>
        A special day for me!
    </p>
    <small><em>20 Apr 2019 [v.1.0.0]</em></small>

    <h2 class="content-subhead">I was initialized...</h2>
    <p>
        Make me great!
    </p>
    <small><em>1 Apr 2019</em></small>
</div>

@include('components.footer',['position'=>'absolute'])

@endsection
