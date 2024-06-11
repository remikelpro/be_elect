<?php

namespace App\Controller;

use App\Repository\ResourceRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Contracts\Translation\TranslatorInterface;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class RessourceController extends AbstractBeElectController
{
    public function __construct(private ResourceRepository $resourceRepository, 
    private TranslatorInterface $translator)
    {
    }
    #[Route('/ressource', name: 'ressource')]
    public function index(): Response
    {
        $breadcrumb = $this->getBreadcrumb([
            ['name' => $this->translator->trans('Partis'), 'href' => $this->generateUrl('partis')],
        ]);
        $resources = $this->resourceRepository->findAll();
        return $this->render('ressource/index.html.twig', [
            'resources' => $resources,
            'breadcrumb' => $breadcrumb
        ]);
    }
}
