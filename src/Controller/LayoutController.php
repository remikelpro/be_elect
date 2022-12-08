<?php
namespace App\Controller;

use App\Repository\PartiRepository;
use App\Repository\TypeElectionRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;

class LayoutController extends AbstractController
{
    private PartiRepository $partyRepository;
    private TypeElectionRepository $typeElectionRepository;

    function __construct(PartiRepository $partyRepository, TypeElectionRepository $typeElectionRepository )
    {
        $this->partyRepository = $partyRepository;
        $this->typeElectionRepository = $typeElectionRepository;
    }

    public function getPartis(): Response
    {
        $partis = $this->partyRepository->findAll();

        return $this->render('layout/_partis.html.twig', [
            'partis' => $partis
        ]);
    }

    public function getTypeElections(): Response
    {
        $typeElections = $this->typeElectionRepository->findAll();

        return $this->render('layout/_type-elections.html.twig', [
            'typeElections' => $typeElections
        ]);
    }
}