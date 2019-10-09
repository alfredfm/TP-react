<?php

namespace App\App\Controllers;

use App\App\Entities\User;
use App\Core\APIController;

class TestController extends APIController
{
    public function test()
    {
        $_FAKE_POST= [
            'name' => 'Freddy',
            'pseudo' => 'campionini'
        ];
        //
        //
        //
        $user = User::create($_FAKE_POST);

        $this->success(200, $user);
    }

}