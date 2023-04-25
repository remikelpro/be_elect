<?php

namespace App\Controller\Admin;

use App\Entity\GovernmentParti;
use EasyCorp\Bundle\EasyAdminBundle\Controller\AbstractCrudController;

class GovernmentPartiCrudController extends AbstractCrudController
{
    public static function getEntityFqcn(): string
    {
        return GovernmentParti::class;
    }

    /*
    public function configureFields(string $pageName): iterable
    {
        return [
            IdField::new('id'),
            TextField::new('title'),
            TextEditorField::new('description'),
        ];
    }
    */
}
