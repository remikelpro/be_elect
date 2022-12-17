<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use App\Repository\PageRepository;

class PageController extends AbstractBeElectController
{
    public function __construct(private PageRepository $pageRepository)
    {    
    }

    #[Route('/p/{slug}', name: 'page')]
    public function page($slug): Response
    {
        $page = $this->pageRepository->findOneBySlug($slug);
        $breadcrumb = $this->getBreadcrumb([
            ['name' => $page->getTitle(), 'href' => $this->generateUrl('page', ['slug'=> $page->getSlug()])]
        ]);

        return $this->render('page/index.html.twig', [
            'breadcrumb' => $breadcrumb,
            'page' => $page
        ]);
    }

    #[Route('/p/{parentslug}/{slug}', name: 'subpage')]
    public function subpage($parentslug, $slug): Response
    {
        $subpage = $this->pageRepository->findOneBySlug($slug);
        $page = $this->pageRepository->findOneBySlug($parentslug);
        $breadcrumb = $this->getBreadcrumb([
            ['name' => $page->getTitle(), 'href' => $this->generateUrl('page', ['slug'=> $page->getSlug()])],
            ['name' => $subpage->getTitle(), 'href' => $this->generateUrl('subpage', ['parentslug' => $page->getSlug(), 'slug' => $subpage->getSlug()])]
        ]);

        return $this->render('page/index.html.twig', [
            'breadcrumb' => $breadcrumb,
            'page' => $subpage
        ]);
    }
}
