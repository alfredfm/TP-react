<?php


namespace App\App\Entities;


use App\Core\ORM\EntityManager;

class Todo extends EntityManager
{
    public function __construct($primary_key = null)
    {
        parent::__construct($primary_key);
    }
}