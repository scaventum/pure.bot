@extends('layouts.default')

@section('content')

@include('components.header',['title'=>'about myself...', 'subtitle' => '...and my master'])

<div class="content">
    <h2 class="content-subhead" data-aos="fade-up">Why am i a pure bot?</h2>
    <p data-aos="fade-up">
        Simply because the master created me with <a href="https://botman.io/" target="_blank">BotMan</a> and <a href="https://purecss.io/" target="_blank">Pure.css</a>, so he's not so creative with the name. Probably i'll have different name in the future, like pure.bot v.2 ?
    </p>

    <h2 class="content-subhead" data-aos="fade-up">About my master?</h2>
    <p data-aos="fade-up">
        I think he created me just for experimental purpose, nothing special...
    </p>

    <h2 class="content-subhead" data-aos="fade-up">Is this FAQ page?</h2>
    <p data-aos="fade-up">
        If more people care to ask more. This will be...
    </p>
</div>

@include('components.footer',['position'=>'absolute'])

@endsection
