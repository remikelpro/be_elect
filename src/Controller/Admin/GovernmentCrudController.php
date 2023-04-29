<?php

namespace App\Controller\Admin;

use App\Entity\Government;
use EasyCorp\Bundle\EasyAdminBundle\Controller\AbstractCrudController;
use EasyCorp\Bundle\EasyAdminBundle\Field\AssociationField;
use EasyCorp\Bundle\EasyAdminBundle\Field\ChoiceField;
use EasyCorp\Bundle\EasyAdminBundle\Field\DateField;
use EasyCorp\Bundle\EasyAdminBundle\Field\NumberField;
use EasyCorp\Bundle\EasyAdminBundle\Field\SlugField;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextField;

class GovernmentCrudController extends AbstractCrudController
{
    public static function getEntityFqcn(): string
    {
        return Government::class;
    }


    public function configureFields(string $pageName): iterable
    {
        yield NumberField::new('id', 'id')->hideOnForm();
        yield TextField::new('name');
        yield TextField::new('firstname');
        yield TextField::new('lastname');
        yield TextField::new('positionOpen');
        yield TextField::new('positionClosed');
        yield NumberField::new('positionRec');
        yield ChoiceField::new('gender')->setChoices(Government::$genderType);
        yield TextField::new('primeMinister');
        yield TextField::new('governmentName');
        yield NumberField::new('legislatureYear');
        yield NumberField::new('governmentYear');
        yield NumberField::new('totalMinister');
        yield NumberField::new('totalSecretary');
    }
}
