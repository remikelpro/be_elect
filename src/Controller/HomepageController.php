<?php

namespace App\Controller;

use App\Form\SearchPartiType;
use App\Repository\PartiRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class HomepageController extends AbstractController
{

    #[Route('/', name: 'homepage')]
    public function index(PartiRepository $partiRepository): Response
    {
        $partis = $partiRepository->findBy([],['id'=> 'ASC'],6);
        $randomParti = $partis[array_rand($partis)];
        
        return $this->render('homepage/index.html.twig', [
            'randomParti'   => $randomParti,
            'partis'        => $partis
        ]);
    }
}
