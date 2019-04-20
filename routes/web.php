<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It is a breeze. Simply tell Lumen the URIs it should respond to
| and give it the Closure to call when that URI is requested.
|
*/

// $router->get('/', function () use ($router) {
//     return $router->app->version();
// });

$router->get('/', ['as' => 'index', 'uses' => 'PagesController@index']);
$router->get('/features', ['as' => 'features', 'uses' => 'PagesController@features']);
$router->get('/changelog', ['as' => 'changelog', 'uses' => 'PagesController@changelog']);
$router->get('/about', ['as' => 'about', 'uses' => 'PagesController@about']);
$router->get('/contact', ['as' => 'contact', 'uses' => 'PagesController@contact']);