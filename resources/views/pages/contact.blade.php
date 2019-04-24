@extends('layouts.default')

@section('content')
<div class="container-center h-100vh-footer">
    <div class="jumbotron">
        <h1 data-animation="typewriter">reaching master...</h1>
        <div class="pure-g contact">
            <div class="pure-u-1-2 pure-u-sm-1-4 contact__item">
                <a href="mailto:scaventum@gmail.com">
                    <i class="fab fa-google"></i>
                    <small>G-Mail</small>
                </a>
            </div>
            <div class="pure-u-1-2 pure-u-sm-1-4 contact__item">
                <a href="mailto:ryan@scaventum.com">
                    <i class="fas fa-at"></i>
                    <small>E-mail</small>
                </a>
            </div>
            <div class="pure-u-1-2 pure-u-sm-1-4 contact__item">
                <a href="https://www.linkedin.com/in/ryan-djoenaidi-383b96166/" target="_blank">
                    <i class="fab fa-linkedin"></i>
                    <small>LinkedIn</small>
                </a>
            </div>
            <div class="pure-u-1-2 pure-u-sm-1-4 contact__item">
                <a href="mailto:+64223916450">
                    <i class="fab fa-whatsapp"></i>
                    <small>WhatsApp</small>
                </a>
            </div>
            <div class="pure-u-1-2 pure-u-sm-1-4 contact__item">
                <a href="https://www.facebook.com/ryan.djoenaidi.5" target="_blank">
                    <i class="fab fa-facebook"></i>
                    <small>Facebook</small>
                </a>
            </div>
            <div class="pure-u-1-2 pure-u-sm-1-4 contact__item">
                <a href="https://www.instagram.com/ryan.r.r/" target="_blank">
                    <i class="fab fa-instagram"></i>
                    <small>Instagram</small>
                </a>
            </div>
            <div class="pure-u-1-2 pure-u-sm-1-4 contact__item">
                <a href="https://twitter.com/RZyryanov" target="_blank">
                    <i class="fab fa-twitter"></i>
                    <small>Twitter</small>
                </a>
            </div>
            <div class="pure-u-1-2 pure-u-sm-1-4 contact__item">
                <a href="https://github.com/scaventum" target="_blank">
                    <i class="fab fa-github"></i>
                    <small>GitHub</small>
                </a>
            </div>
        </div>
    </div>
</div>

@include('components.footer',['position'=>'fixed'])

@endsection
