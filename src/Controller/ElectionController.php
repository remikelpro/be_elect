<?php

namespace App\Controller;

use App\Repository\ElectionRepository;
use App\Repository\TypeElectionRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Contracts\Translation\TranslatorInterface;

class ElectionController extends AbstractBeElectController
{
    public function __construct(
        private TypeElectionRepository $typeElectionRepository,
        private TranslatorInterface $translator,
        private ElectionRepository $electionRepository
    ) {}

    #[Route('/elections', name: 'elections')]
    public function index(): Response
    {

        $breadcrumb = $this->getBreadcrumb([
            ['name' => $this->translator->trans('Elections'), 'href' => $this->generateUrl('elections')]
        ]);

        $latestElections = $this->electionRepository->findLastElections();
        // dd($latestElections);

        return $this->render('election/index.html.twig', [
            'breadcrumb' => $breadcrumb,
            'elections' => $latestElections
        ]);
    }

    #[Route('/elections/{slug}', name: 'electionType')]
    public function typeElection($slug): Response
    {
        $typeElection = $this->typeElectionRepository->findOneBySlug($slug);

        return $this->render('election/type.html.twig', [
            'typeElection' => $typeElection
        ]);
    }
}
