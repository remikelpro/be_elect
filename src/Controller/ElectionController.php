<?php

namespace App\Controller;

use App\Repository\TypeElectionRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Contracts\Translation\TranslatorInterface;

class ElectionController extends AbstractBeElectController
{
    public function __construct(
        private TypeElectionRepository $typeElectionRepository,
        private TranslatorInterface $translator
    ) {}

    #[Route('/elections', name: 'elections')]
    public function index(): Response
    {

        $breadcrumb = $this->getBreadcrumb([
            ['name' => $this->translator->trans('Elections'), 'href' => $this->generateUrl('elections')]
        ]);

        return $this->render('election/index.html.twig', [
            'breadcrumb' => $breadcrumb,
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
