<?php

namespace App\Controller\Admin;

use App\Entity\Arrondissement;
use App\Entity\Article;
use App\Entity\Canton;
use App\Entity\Commune;
use App\Entity\Election;
use App\Entity\Leader;
use App\Entity\Member;
use App\Entity\Page;
use App\Entity\Parti;
use App\Entity\Province;
use App\Entity\Region;
use App\Entity\Resource;
use App\Entity\TypeElection;
use App\Entity\TypeResultat;
use App\Entity\Resultat;
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
        // yield MenuItem::linkToCrud('Article', 'fas fa-newspaper', Article::class);
        yield MenuItem::linkToCrud('Parti', 'fas fa-landmark', Parti::class);
        yield MenuItem::linkToCrud('Leader', 'fas fa-user-tie', Leader::class);
        yield MenuItem::linkToCrud('Member', 'fas fa-people-group', Member::class);
        yield MenuItem::linkToCrud('Type Election', 'fas fa-person-booth', TypeElection::class);
        yield MenuItem::linkToCrud('Election', 'fas fa-person-booth', Election::class);
        yield MenuItem::linkToCrud('Page', 'fa fa-file', Page::class);
        yield MenuItem::linkToCrud('Type Resultat', 'fas fa-square-poll-vertical', TypeResultat::class);
        yield MenuItem::linkToCrud('Resultat', 'fas fa-square-poll-vertical', Resultat::class);
        yield MenuItem::linkToCrud('Resource', 'fas fa-file-pdf', Resource::class);
        yield MenuItem::linkToCrud('Region', 'fas fa-earth-europe', Region::class);
        yield MenuItem::linkToCrud('Province', 'fas fa-mountain-sun', Province::class);
        yield MenuItem::linkToCrud('Arrondissement', 'fas fa-mountain-city', Arrondissement::class);
        yield MenuItem::linkToCrud('Canton', 'fas fa-tree-city', Canton::class);
        yield MenuItem::linkToCrud('Commune', 'fas fa-city', Commune::class);
    }
}
