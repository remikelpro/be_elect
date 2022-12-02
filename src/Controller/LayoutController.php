<?php
namespace App\Controller;

use App\Repository\PartiRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;

class LayoutController extends AbstractController
{
    private PartiRepository $partyRepository;

    function __construct(PartiRepository $partyRepository )
    {
        $this->partyRepository = $partyRepository;
    }
    public function getPartis(int $max = 3): Response
    {
        $partis = $this->partyRepository->findAll();

        return $this->render('layout/_partis.html.twig', [
            'partis' => $partis
        ]);
    }
}