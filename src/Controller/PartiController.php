<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class PartiController extends AbstractController
{
    #[Route('/{_locale}/partis', name: 'partis')]
    public function index(): Response
    {
        return $this->render('parti/index.html.twig', [
            'controller_name' => 'PartiController',
        ]);
    }

    #[Route('/{_locale}/parti/{parti}', name: 'parti')]
    public function parti(): Response
    {
        return $this->render('parti/parti.html.twig', [
            'controller_name' => 'PartiController',
        ]);
    }
}
