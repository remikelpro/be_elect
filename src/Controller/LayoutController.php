<?php
namespace App\Controller;

use App\Repository\PageRepository;
use App\Repository\PartiRepository;
use App\Repository\TypeElectionRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\BrowserKit\Request;
use Symfony\Component\HttpFoundation\Response;

class LayoutController extends AbstractController
{
    function __construct(private PartiRepository $partyRepository,
    private TypeElectionRepository $typeElectionRepository,
    private PageRepository $pageRepository )
    {
    }

    public function getPartis(): Response
    {
        $partis = $this->partyRepository->findBy(['main' => true],['id'=> 'ASC'],10);

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

    public function getPages($pathinfo = ''): Response
    {
        $pages = $this->pageRepository->findBy(['idParent'=> null, 'showInMenu' => true], ['position' => 'ASC']);
        return $this->render('layout/_pages.html.twig', [
            'pages' => $pages,
            'pathinfo' => $pathinfo
        ]);
    }
}