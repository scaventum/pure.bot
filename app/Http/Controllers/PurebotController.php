<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class PurebotController extends Controller
{
    public function index(Request $request){
        return json_encode(["response" => "Hi!"]);
    }
}
