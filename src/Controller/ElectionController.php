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
        private ElectionRepository $electionRepository,
        private TypeElectionRepository $TypeElectionRepository
    ) {}

    #[Route('/elections', name: 'elections')]
    public function index(): Response
    {

        $breadcrumb = $this->getBreadcrumb([
            ['name' => $this->translator->trans('Elections'), 'href' => $this->generateUrl('elections')]
        ]);

        $latestElections = $this->electionRepository->findLastElections();
        $allElections = $this->typeElectionRepository->findAll();;

        return $this->render('election/index.html.twig', [
            'breadcrumb' => $breadcrumb,
            'latest_elections' => $latestElections,
            'all_elections' => $allElections
        ]);
    }

    #[Route('/elections/{slug}', name: 'electionType')]
    public function typeElection($slug): Response
    {


        $typeElection = $this->typeElectionRepository->findOneBySlug($slug);
        // dd($typeElection);

        $electionsByType = $this->typeElectionRepository->findAll();
        $imagePath = $this->getImagePathForElection($typeElection->getName());
        $electionsByDate = $this->electionRepository->findBy(
            ['idTypeElection' => $typeElection],
            ['date' => 'DESC']
        );

        // dd($electionsByDate);




        $breadcrumb = $this->getBreadcrumb([
            ['name' => $this->translator->trans('Elections'), 'href' => $this->generateUrl('elections')],
            ['name' => $typeElection->getName()]
        ]);

        return $this->render('election/type.html.twig', [
            'typeElection' => $typeElection,
            'all_elections_type' => $electionsByType,
            'image_path' => $imagePath,
            'breadcrumb' => $breadcrumb,
            'all_elections_date' =>   $electionsByDate
        ]);
    }

    private function getImagePathForElection(string $name): string
    {
        return match ($name) {
            'Sénat', 'Chambre des représentants' => 'img/election/icon-legislatives.svg',
            'Parlement européen' => 'img/election/icon-europeennes.svg',
            'Province', 'Flandre', 'Wallonie', 'Communauté germanophone' => 'img/election/icon-regionales.svg',
            default => 'img/election/icon-default.svg',
        };
    }
}
