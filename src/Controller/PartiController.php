<?php

namespace App\Controller;

use App\Entity\Parti;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use App\Repository\PartiRepository;

class PartiController extends AbstractController
{
    private PartiRepository $partiRepository;

    public function __construct(PartiRepository $partiRepository)
    {
        $this->partiRepository = $partiRepository;
    }

    #[Route('/partis', name: 'partis')]
    public function index(): Response
    {
        return $this->render('parti/index.html.twig', [
            'controller_name' => 'PartiController',
        ]);
    }

    #[Route('/parti/{slug}', name: 'parti')]
    public function parti(Parti $parti): Response
    {
        return $this->render('parti/parti.html.twig', [
            'controller_name' => 'PartiController',
        ]);
    }

    #[Route('/partisJson', name: 'partisJson')]
    public function partisJson(): JsonResponse
    {
        $partis = $this->partiRepository->findAll();

        return new JsonResponse($partis);
    }
}
