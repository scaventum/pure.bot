@extends('layouts.default')

@section('content')
<div class="container-center h-100vh-footer">
    <div class="jumbotron">
        <h1 data-animation="typewriter">reaching master...</h1>
        <div class="pure-g contact">
            @foreach($contacts as $contact)
                <div class="pure-u-1-2 pure-u-sm-1-4 contact__item">
                    <a href="{{ $contact->value }}" {{ $contact->external?"target='_blank'":"" }}>
                        <i class="{{ $contact->fa_icon }}"></i>
                        <small>{{ $contact->name }}</small>
                    </a>
                </div>
            @endforeach
        </div>
    </div>
</div>

@include('components.footer',['position'=>'fixed'])

@endsection
