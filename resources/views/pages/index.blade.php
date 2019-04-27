@extends('layouts.default')

@section('content')
<div class="container-space-between h-100vh-footer">
    
    <div class="jumbotron">
    </div>

    <div class="jumbotron">
        <h1 data-animation="typewriter">Hi, bot's listening...</h1>
        <h2>There's box down there. You can say hi too.</h2>
    </div>

    <!-- <div class="jumbotron h-100"> -->
    <div class="jumbotron">
        <div class="chat-box">
            <div class="chat-box__list">
            <!-- Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sneaky lazy master put a placeholder as a feature. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sneaky lazy master put a placeholder as a feature. -->
            </div>
            <form class="pure-form chat-box__form pure-g">
                <div class="pure-u-3-4 pure-u-sm-7-8">
                    <input type="text" id="message" placeholder="type something here...">
                </div>
                <div class="pure-u-1-4  pure-u-sm-1-8">
                    <button type="submit" id="send" class="pure-button button-secondary">
                        <i class="fas fa-paper-plane"></i>
                    </button>
                </div>
            </form>
        </div>
    </div>
</div>


@include('components.footer',['position'=>'fixed'])

@endsection
