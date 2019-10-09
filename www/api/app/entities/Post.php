<?php


namespace App\App\Entities;


use App\Core\ORM\EntityManager;

class Post extends EntityManager
{
    /**
     * Post constructor.
     * @param null $primary_key
     */
    public function __construct($primary_key = null)
    {
       parent::__construct($primary_key);
    }
}