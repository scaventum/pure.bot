@extends('layouts.default')

@section('content')

@include('components.header',['title'=>'my diary...', 'subtitle' => 'Whatever my master did to me is all here'])

<div class="content">
    @foreach($changelog as $changelog_item)
        <h2 class="content-subhead" data-aos="fade-up">{{ $changelog_item->title }}</h2>
        <p data-aos="fade-up">
            {{ $changelog_item->description }}
        </p>
        <small data-aos="fade-up">
            <em>{{ date("l j M Y",strtotime($changelog_item->created_at)) }} 
                [v.
                    {{ $changelog_item->version_major }}.
                    {{ $changelog_item->version_minor }}.
                    {{ $changelog_item->version_patch }}
                ]
            </em>
        </small>
    @endforeach
</div>

@include('components.footer',['position'=>'absolute'])

@endsection
