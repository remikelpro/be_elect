<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

abstract class AbstractBeElectController extends AbstractController
{
    protected function getBreadcrumb(array $breadcrumb = [])
    {
        $breadcrumb = array_merge([['href' => '/', 'name' => 'Accueil']], $breadcrumb);

        return $breadcrumb;
    }
}
