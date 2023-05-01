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
        $partisFlandre = $this->partiRepository->findBy(['federal' => Parti::$federalType['federal'], 'place' => Parti::$placeType['flandre']]);
        $partisBrussel = $this->partiRepository->findBy(['federal' => Parti::$federalType['federal'], 'place' => Parti::$placeType['brussel']]);
        $partisWallonie = $this->partiRepository->findBy(['federal' => Parti::$federalType['federal'], 'place' => Parti::$placeType['wallonie']]);
        $partisGermanophone = $this->partiRepository->findBy(['federal' => Parti::$federalType['federal'], 'place' => Parti::$placeType['germanophone']]);
        $partisNonFederal = $this->partiRepository->findBy(['federal' => Parti::$federalType['non-federal']]);
        $partisDisappeared = $this->partiRepository->findBy(['federal' => Parti::$federalType['disappeared']]);
        $breadcrumb = $this->getBreadcrumb([
            ['name' => $this->translator->trans('Partis'), 'href' => $this->generateUrl('partis')]
        ]);

        return $this->render('parti/index.html.twig', [
            'breadcrumb' => $breadcrumb,
            'partisFlandre' => $partisFlandre,
            'partisBrussel' => $partisBrussel,
            'partisWallonie' => $partisWallonie,
            'partisGermanophone' => $partisGermanophone,
            'partisNonFederal' => $partisNonFederal,
            'partisDisappeared' => $partisDisappeared,
        ]);
    }

    /**
     * @Route("/parti/{id}", name="parti_id", requirements={"id" : "\d+"})
     */
    public function partiIdRedirect(Parti $parti)
    {
        return $this->redirectToRoute('parti', ['slug' => $parti->getSlug()]);
    }

    /**
     * @Route("/parti/{slug}", name="parti", requirements={"slug" : "[a-zA-Z-0-9]+"})
     */
    public function parti(Parti $parti): Response
    {
        $breadcrumb = $this->getBreadcrumb([
            ['name' => $this->translator->trans('Partis'), 'href' => $this->generateUrl('partis')],
            ['name' => $parti->getName(), 'href' => $this->generateUrl('parti', ['slug' => $parti->getSlug()])]
        ]);

        return $this->render('parti/parti.html.twig', [
            'breadcrumb'    => $breadcrumb,
            'parti'         => $parti
        ]);
    }

    #[Route('/partisJson', name: 'partisJson')]
    public function partisJson(): JsonResponse
    {
        $partis = $this->partiRepository->findAll();

        return new JsonResponse($partis);
    }
}
