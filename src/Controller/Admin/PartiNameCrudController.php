<?php

namespace App\Controller\Admin;

use App\Entity\PartiName;
use EasyCorp\Bundle\EasyAdminBundle\Controller\AbstractCrudController;
use EasyCorp\Bundle\EasyAdminBundle\Field\AssociationField;
use EasyCorp\Bundle\EasyAdminBundle\Field\DateField;
use EasyCorp\Bundle\EasyAdminBundle\Field\IdField;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextField;

class PartiNameCrudController extends AbstractCrudController
{
    public static function getEntityFqcn(): string
    {
        return PartiName::class;
    }

    public function configureFields(string $pageName): iterable
    {
        return [
            IdField::new('id')->hideOnForm(),
            TextField::new('name'),
            DateField::new('startDate'),
            DateField::new('endDate'),
            AssociationField::new('parti')
        ];
    }
}
