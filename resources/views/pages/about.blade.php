@extends('layouts.default')

@section('content')
<div class="header">
    <h1 data-animation="typewriter">about myself...</h1>
    <h2>...and my master</h2>
</div>

<div class="content">
    <h2 class="content-subhead">Why am i a pure bot?</h2>
    <p>
        Simply because the master created me with <a href="https://botman.io/" target="_blank">BotMan</a> and <a href="https://purecss.io/" target="_blank">Pure.css</a>, so he's not so creative with the name. Probably i'll have different name in the future, like pure.bot v.2 ?
    </p>

    <h2 class="content-subhead">About my master?</h2>
    <p>
        I think he created me just for experimental purpose, nothing special...
    </p>
</div>

@include('components.footer',['position'=>'absolute'])

@endsection
