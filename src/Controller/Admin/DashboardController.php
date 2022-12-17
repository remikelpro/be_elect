<?php

namespace App\Controller\Admin;

use App\Entity\Article;
use App\Entity\Election;
use App\Entity\Page;
use App\Entity\Parti;
use App\Entity\TypeElection;
use EasyCorp\Bundle\EasyAdminBundle\Config\Dashboard;
use EasyCorp\Bundle\EasyAdminBundle\Config\MenuItem;
use EasyCorp\Bundle\EasyAdminBundle\Controller\AbstractDashboardController;
use EasyCorp\Bundle\EasyAdminBundle\Router\AdminUrlGenerator;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class DashboardController extends AbstractDashboardController
{
    #[Route('/admin', name: 'admin')]
    public function index(): Response
    {

        $routeBuilder = $this->container->get(AdminUrlGenerator::class);
        $url = $routeBuilder->setController(ArticleCrudController::class)->generateUrl();

        return $this->redirect($url);
    }

    public function configureDashboard(): Dashboard
    {
        return Dashboard::new()
            ->setTitle('Be Elect');
    }

    public function configureMenuItems(): iterable
    {
        yield MenuItem::linkToRoute('Back to the website', 'fa fa-home', 'homepage');
        yield MenuItem::linkToCrud('Article', 'fas fa-list', Article::class);
        yield MenuItem::linkToCrud('Parti', 'fas fa-list', Parti::class);
        yield MenuItem::linkToCrud('Type Election', 'fas fa-list', TypeElection::class);
        yield MenuItem::linkToCrud('Election', 'fas fa-list', Election::class);
        yield MenuItem::linkToCrud('Page', 'fas fa-list', Page::class);
    }
}
