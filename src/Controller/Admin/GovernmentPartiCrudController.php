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
        yield IdField::new('id')->hideOnForm();
        yield DateField::new('startDate');
        yield DateField::new('endDate');
        yield BooleanField::new('main');
        yield AssociationField::new('parti');
        yield AssociationField::new('government');
    }
    
}
