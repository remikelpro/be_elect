<?php

namespace App\Controller;

use App\Repository\PartiRepository;
use App\Repository\TypeElectionRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class DatabaseController extends AbstractController
{
    function __construct(private PartiRepository $partiRepository,
    private TypeElectionRepository $typeElectionRepository)
    {
    }

    #[Route('/database', name: 'database')]
    public function index(): Response
    {
        return $this->render('database/index.html.twig', [
        ]);
    }
}
