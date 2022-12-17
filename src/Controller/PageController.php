<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use App\Repository\PageRepository;

class PageController extends AbstractController
{
    public function __construct(private PageRepository $pageRepository)
    {    
    }

    #[Route('/p/{slug}', name: 'page')]
    public function page($slug): Response
    {
        $page = $this->pageRepository->findOneBySlug($slug);

        return $this->render('page/index.html.twig', [
            'page' => $page
        ]);
    }

    #[Route('/p/{parentslug}/{slug}', name: 'subpage')]
    public function subpage($slug): Response
    {
        $subpage = $this->pageRepository->findOneBySlug($slug);

        return $this->render('page/index.html.twig', [
            'page' => $subpage
        ]);
    }
}
