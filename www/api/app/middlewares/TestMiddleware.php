<?php

namespace App\App\Middlewares;

class TestMiddleware
{

    public function execute()
    {
        return (object) [
            'success' => true,
        ];
    }
}