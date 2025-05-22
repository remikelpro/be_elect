<?php

namespace App\Controller;

use App\Entity\TypeElection;
use App\Entity\TypeElectionTranslation;
use App\Repository\ElectionRepository;
use App\Repository\TypeElectionRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Contracts\Translation\TranslatorInterface;

use function PHPSTORM_META\type;

class ElectionController extends AbstractBeElectController
{
    public function __construct(
        private TypeElectionRepository $typeElectionRepository,
        private TranslatorInterface $translator,
        private ElectionRepository $electionRepository,
        private TypeElectionRepository $TypeElectionRepository,
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

        $imagePath = $typeElection->getMainIcon();

        $electionsByDate = $this->electionRepository->findBy(
            ['idTypeElection' => $typeElection],
            ['date' => 'DESC']
        );

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

    #[Route('/elections/{slug}/{year}', name: 'electionDate')]
    public function electionByTypeAndYear(string $slug, int $year): Response
    {


        $typeElection = $this->typeElectionRepository->findOneBySlug($slug);

        $electionByDate = $this->electionRepository->findByTypeAndYear($typeElection, $year);

        $year = $electionByDate->getDate()->format('Y');


        $breadcrumb = $this->getBreadcrumb([
            ['name' => $this->translator->trans('Elections'), 'href' => $this->generateUrl('elections')],
            ['name' => $typeElection->getName(), 'href' => $this->generateUrl('electionType', ['slug' => $typeElection->getSlug()])],
            ['name' => $year]
        ]);

        return $this->render('election/date.html.twig', [
            'breadcrumb' => $breadcrumb,
            'election' => $electionByDate
        ]);
    }


    // private function getImagePathForElection(string $name): string
    // {
    //     return match ($name) {
    //         'Sénat', 'Chambre des représentants' => 'img/election/icon-legislatives.svg',
    //         'Parlement européen' => 'img/election/icon-europeennes.svg',
    //         'Province', 'Flandre', 'Wallonie', 'Communauté germanophone' => 'img/election/icon-regionales.svg',
    //         default => 'img/election/icon-default.svg',
    //     };
    // }
}
