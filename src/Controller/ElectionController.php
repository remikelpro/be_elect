<?php

namespace App\Controller;

use App\Entity\TypeElection;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class ElectionController extends AbstractController
{
    #[Route('/elections', name: 'elections')]
    public function index(): Response
    {
        return $this->render('election/index.html.twig', [
            'controller_name' => 'ElectionController',
        ]);
    }

    #[Route('/elections/{slugFr|slugEn|slugNl}', name: 'typeElection')]
    public function typeElection(TypeElection $typeElection): Response
    {
        return $this->render('election/index.html.twig', [
            'controller_name' => 'ElectionController',
        ]);
    }
}
