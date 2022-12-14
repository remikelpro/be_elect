<?php

namespace App\Controller;

use App\Entity\TypeElection;
use App\Repository\TypeElectionRepository;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\ParamConverter;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class ElectionController extends AbstractController
{
    public function __construct(private TypeElectionRepository $typeElectionRepository)
    {
        
    }
    
    #[Route('/elections', name: 'elections')]
    public function index(): Response
    {
        return $this->render('election/index.html.twig', [
            'controller_name' => 'ElectionController',
        ]);
    }

    #[Route('/elections/{slug}', name: 'typeElection')]
    public function typeElection($slug): Response
    {
        $typeElection = $this->typeElectionRepository->findOneBySlug($slug);

        return $this->render('election/type.html.twig', [
            'controller_name' => 'ElectionController',
            'typeElection' => $typeElection
        ]);
    }
}
