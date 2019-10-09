<?php

namespace App\App\Controllers;

use App\App\Entities\User;
use App\Core\APIController;
use App\Core\Request\Request;
use App\Core\Traits\Eeasy;

class UserController extends APIController
{
    use Eeasy;
    /**
     *
     */
    public function register()
    {
        $post = Request::post();
        $errors = [];
        //
        if (!filter_var($post->get('email'), FILTER_VALIDATE_EMAIL))
        {
            $errors[] = [
                'name' => 'email',
                'label' => 'Invalid value',
                'notice' => 'INCORRECT_VALUE'
            ];
        }
        //
        $timezone = Request::post("timezone");
        if (!in_array(Request::post("timezone"), DateTimeZone::listIdentifiers())) {
            $timezone = "UTC";
        }
    }

    public function test()
    {
        Die('Update MEthid');
        var_dump('Another Update in Submodule!!!');
    }

    public function getProut()
    {
        return '$private';
    }
}