
<!doctype html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="A layout example with a side menu that hides on mobile, just like the Pure website.">
    <title>pure.bot</title>
    
    <!-- Pure.css CSS -->
    <link rel="stylesheet" href="https://unpkg.com/purecss@1.0.0/build/pure-min.css" integrity="sha384-nn4HPE8lTHyVtfCBi5yW9d20FjT8BJwUXyWZT9InLYax14RDjBj46LmSztkmNP9w" crossorigin="anonymous">
    <!-- Font CSS -->
    <link href="https://fonts.googleapis.com/css?family=Cute+Font|Roboto:300,400,700" rel="stylesheet">
    <!-- Custom CSS -->
    <link rel="stylesheet" href="{{ url('assets/css/style.css') }}" >
</head>
<body>

<div id="layout">
    @include('components.sidebar')

    <div id="main">
        @yield('content')
    </div>
</div>

<script src="{{ url('assets/js/script.js') }}"></script>
</body>
</html>
