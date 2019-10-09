<?php


namespace App\App\Entities;


use App\Core\ORM\EntityManager;

class User extends EntityManager
{
    /**
     * User constructor.
     */
    public function __construct($primary_key = null)
    {
        parent::__construct($primary_key);
    }
}