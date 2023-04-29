<?php

namespace App\Controller\Admin;

use App\Entity\GovernmentParti;
use EasyCorp\Bundle\EasyAdminBundle\Controller\AbstractCrudController;
use EasyCorp\Bundle\EasyAdminBundle\Field\AssociationField;
use EasyCorp\Bundle\EasyAdminBundle\Field\BooleanField;
use EasyCorp\Bundle\EasyAdminBundle\Field\DateField;
use EasyCorp\Bundle\EasyAdminBundle\Field\IdField;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextField;

class GovernmentPartiCrudController extends AbstractCrudController
{
    public static function getEntityFqcn(): string
    {
        return GovernmentParti::class;
    }

    public function configureFields(string $pageName): iterable
    {
        return [
            IdField::new('id')->hideOnForm(),
            DateField::new('startDate'),
            DateField::new('endDate'),
            BooleanField::new('main'),
            AssociationField::new('parti'),
            AssociationField::new('government')
        ];
    }
}
