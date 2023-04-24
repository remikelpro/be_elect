<?php

namespace App\Controller\Admin;

use App\Entity\Member;
use EasyCorp\Bundle\EasyAdminBundle\Controller\AbstractCrudController;
use EasyCorp\Bundle\EasyAdminBundle\Field\NumberField;

class MemberCrudController extends AbstractCrudController
{
    public static function getEntityFqcn(): string
    {
        return Member::class;
    }

    public function configureFields(string $pageName): iterable
    {
        yield NumberField::new('id', 'id')->hideOnForm();
        yield NumberField::new('year', 'year');
        yield NumberField::new('number', 'number');
    }
}
