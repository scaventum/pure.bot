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

Route::get('/', ['as' => 'index', 'uses' => 'PagesController@index']);
Route::get('/features', ['as' => 'features', 'uses' => 'PagesController@features']);
Route::get('/changelog', ['as' => 'changelog', 'uses' => 'PagesController@changelog']);
Route::get('/about', ['as' => 'about', 'uses' => 'PagesController@about']);
Route::get('/contact', ['as' => 'contact', 'uses' => 'PagesController@contact']);

Auth::routes();
Route::get('/home', 'HomeController@index')->name('home');
