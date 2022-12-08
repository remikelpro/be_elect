<?php

namespace App\Controller\Admin;

use App\Entity\TypeElection;
use EasyCorp\Bundle\EasyAdminBundle\Config\Crud;
use EasyCorp\Bundle\EasyAdminBundle\Controller\AbstractCrudController;
use EasyCorp\Bundle\EasyAdminBundle\Field\SlugField;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextEditorField;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextField;

class TypeElectionCrudController extends AbstractCrudController
{
    public static function getEntityFqcn(): string
    {
        return TypeElection::class;
    }

    public function configureCrud(Crud $crud): Crud
    {
        return $crud->setSearchFields(['nameFr', 'nameNl', 'nameEn', 'descriptionFr', 'descriptionNl', 'descriptionEn']);
    }

    public function configureFields(string $pageName): iterable
    {
        return [
            TextField::new('nameFr'),
            TextField::new('nameNl'),
            TextField::new('nameEn'),
            TextEditorField::new('descriptionFr'),
            TextEditorField::new('descriptionNl'),
            TextEditorField::new('descriptionEn'),
            SlugField::new('slugFr')->setTargetFieldName('nameFr'),
            SlugField::new('slugNl')->setTargetFieldName('nameNl'),
            SlugField::new('slugEn')->setTargetFieldName('nameEn'),
        ];
    }
}
