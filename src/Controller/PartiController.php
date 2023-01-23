<?php

namespace App\Controller;

use App\Entity\Parti;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use App\Repository\PartiRepository;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Contracts\Translation\TranslatorInterface;

class PartiController extends AbstractBeElectController
{

    public function __construct(private PartiRepository $partiRepository, private TranslatorInterface $translator)
    {
    }

    #[Route('/partis', name: 'partis')]
    public function index(): Response
    {
        $breadcrumb = $this->getBreadcrumb([
            ['name' => $this->translator->trans('Partis'), 'href' => $this->generateUrl('partis')]
        ]);

        return $this->render('parti/index.html.twig', [
            'breadcrumb' => $breadcrumb
        ]);
    }

    /**
     * @Route("/parti/{slug}", name="parti", requirements={"slug" : "[a-zA-Z-]+"})
     */
    public function parti(Parti $parti): Response
    {
        $breadcrumb = $this->getBreadcrumb([
            ['name' => $this->translator->trans('Partis'), 'href' => $this->generateUrl('partis')],
            ['name' => $parti->getName(), 'href' => $this->generateUrl('parti', ['slug' => $parti->getSlug()])]
        ]);

        return $this->render('parti/parti.html.twig', [
            'breadcrumb' => $breadcrumb
        ]);
    }

    /**
     * @Route("/parti/{id}", name="parti_id", requirements={"id" : "\d+"})
     */
    public function partiIdRedirect(Parti $parti)
    {
        return $this->redirectToRoute('parti', ['slug' => $parti->getSlug()]);
    }

    #[Route('/partisJson', name: 'partisJson')]
    public function partisJson(): JsonResponse
    {
        $partis = $this->partiRepository->findAll();

        return new JsonResponse($partis);
    }
}
