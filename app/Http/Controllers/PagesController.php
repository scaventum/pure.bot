<?php

namespace App\Http\Controllers;

use App\Contact;
use App\Changelog;
use App\Feature;

class PagesController extends Controller
{
    protected $data;

    protected $last_version_major;
    protected $last_version_minor;
    protected $last_version_patch;
    protected $last_version;
    
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $last_changelog = Changelog::orderBy('created_at','Desc')->first();
        $this->last_version_major = $last_changelog->version_major;
        $this->last_version_minor = $last_changelog->version_minor;
        $this->last_version_patch = $last_changelog->version_patch;
        $this->last_version = $last_changelog->version_major.".".$last_changelog->version_minor.".".$last_changelog->version_patch;
        $this->data = [
            "last_version_major" => $this->last_version_major,
            "last_version_minor" => $this->last_version_minor,
            "last_version_patch" => $this->last_version_patch,
            "last_version" => $this->last_version,
        ];
    }

    public function index(){
        return view("pages.index",$this->data);
    }
    
    public function features(){
        $features = Feature::orderBy('order','Asc')->get();

        $this->data["features"] = $features;

        return view("pages.features",$this->data);
    }

    public function changelog(){
        $changelog = Changelog::orderBy('created_at','Desc')->get();

        $this->data["changelog"] = $changelog;

        return view("pages.changelog",$this->data);
    }
    
    public function about(){
        return view("pages.about",$this->data);
    }

    public function contact(){
        $contacts = Contact::where('active',true)->orderBy('order','Asc')->get();

        $this->data["contacts"] = $contacts;

        return view("pages.contact",$this->data);
    }
}
