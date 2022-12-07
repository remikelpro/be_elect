<?php

namespace App\Controller;

use App\Repository\PartiRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Contracts\Translation\TranslatorInterface;

class HomepageController extends AbstractController
{

    #[Route('/', name: 'homepage')]
    public function index(PartiRepository $partiRepository): Response
    {
        $partis = $partiRepository->findAll();
        $randomParti = $partis[array_rand($partis)];

        return $this->render('homepage/index.html.twig', [
            'randomParti' => $randomParti,
        ]);
    }
}
