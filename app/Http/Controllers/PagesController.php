<?php

namespace App\Http\Controllers;

class PagesController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        //
    }

    public function index(){
        return view("pages.index");
    }
}
