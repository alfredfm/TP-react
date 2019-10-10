<?php


namespace App\App\Controllers;


use App\App\Entities\Todo;
use App\Core\APIController;
use App\Core\Request\Request;

class TodoController extends APIController
{
    public function getTodos()
    {
        $todos = Todo::all()
            ->flush();

        $this->success(200, $todos);
    }

    public function postTodo()
    {
        $todo = Todo::create(Request::post()->getContent());

        $todo->save();

        $this->success(201, $todo);
    }
}