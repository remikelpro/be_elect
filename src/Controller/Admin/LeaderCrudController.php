<?php

namespace App\Controller\Admin;

use App\Entity\Leader;
use EasyCorp\Bundle\EasyAdminBundle\Controller\AbstractCrudController;
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
        return [
            NumberField::new('id', 'id')->hideOnForm(),
            TextField::new('name'),
            ChoiceField::new('selection')->setChoices(Leader::$selectionType),
            NumberField::new('score'),
            NumberField::new('n_candidate'),
            DateField::new('mandat_start'),
            DateField::new('mandat_end'),
            ChoiceField::new('reason_end')->setChoices(Leader::$reasonType)
        ];
    }
}
