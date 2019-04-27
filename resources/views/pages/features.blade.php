@extends('layouts.default')

@section('content')

@include('components.header',['title'=>'the least i can do...', 'subtitle' => '...and i wish to learn'])

<div class="content">
    @foreach($features as $feature)
        <h2 class="content-subhead">{{ $feature->title }}</h2>
        <p>
            {{ $feature->description }}
        </p>
    @endforeach
</div>

@include('components.footer',['position'=>'absolute'])

@endsection
