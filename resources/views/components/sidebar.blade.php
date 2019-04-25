<!-- Menu toggle -->
<a href="#menu" id="menuLink" class="menu-link">
    <!-- Hamburger icon -->
    <span></span>
</a>

<div id="menu">
    <div class="pure-menu">
        <a class="pure-menu-heading" href="/">{{ config('app.name') }}</a>

        <ul class="pure-menu-list">
            <li class="pure-menu-item {{ app('request')->is('features')? 'pure-menu-selected':'' }}">
                <a href="/features" class="pure-menu-link">features</a>
            </li>

            <li class="pure-menu-item {{ app('request')->is('changelog')? 'pure-menu-selected':'' }}">
                <a href="/changelog" class="pure-menu-link">changelog</a>
            </li>

            <li class="pure-menu-item {{ app('request')->is('about')? 'pure-menu-selected':'' }} menu-item-divided ">
                <a href="/about" class="pure-menu-link">about</a>
            </li>

            <li class="pure-menu-item {{ app('request')->is('contact')? 'pure-menu-selected':'' }}">
                <a href="/contact" class="pure-menu-link">contact</a>
            </li>   

            <li class="pure-menu-item">
                
            </li>             
        </ul>
    </div>
</div>