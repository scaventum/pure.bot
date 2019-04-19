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
    
    public function features(){
        return view("pages.features");
    }
    
    public function about(){
        return view("pages.about");
    }

    public function contact(){
        return view("pages.contact");
    }
}
