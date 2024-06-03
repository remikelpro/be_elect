<?php

namespace App\Controller\Admin;

use App\Entity\Leader;
use EasyCorp\Bundle\EasyAdminBundle\Controller\AbstractCrudController;
use EasyCorp\Bundle\EasyAdminBundle\Field\AssociationField;
use EasyCorp\Bundle\EasyAdminBundle\Field\ChoiceField;
use EasyCorp\Bundle\EasyAdminBundle\Field\DateField;
use EasyCorp\Bundle\EasyAdminBundle\Field\NumberField;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextField;

class LeaderCrudController extends AbstractCrudController
{
    public static function getEntityFqcn(): string
    {
        return Leader::class;
    }

    public function configureFields(string $pageName): iterable
    {
        yield NumberField::new('id', 'id')->hideOnForm();
        yield AssociationField::new('parti');
        yield TextField::new('name');
        yield ChoiceField::new('selection')->setChoices(Leader::$selectionType);
        yield NumberField::new('score');
        yield NumberField::new('n_candidate');
        yield DateField::new('mandat_start');
        yield DateField::new('mandat_end');
        yield ChoiceField::new('reason_end')->setChoices(Leader::$reasonType);
    }
    
}
