<?php

namespace App\Controller\Admin;

use App\Entity\Parti;
use EasyCorp\Bundle\EasyAdminBundle\Config\Crud;
use EasyCorp\Bundle\EasyAdminBundle\Controller\AbstractCrudController;
use EasyCorp\Bundle\EasyAdminBundle\Field\ColorField;
use EasyCorp\Bundle\EasyAdminBundle\Field\ImageField;
use EasyCorp\Bundle\EasyAdminBundle\Field\SlugField;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextEditorField;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextField;

class PartiCrudController extends AbstractCrudController
{
    public static function getEntityFqcn(): string
    {
        return Parti::class;
    }

    public function configureCrud(Crud $crud): Crud
    {
        return $crud->setEntityLabelInSingular('Parti')
            ->setEntityLabelInPlural('Partis')
            ->setSearchFields(['name', 'president']);
    }

    public function configureFields(string $pageName): iterable
    {
        return [
            ImageField::new('logo')->setBasePath('img/parti/')
                ->setUploadDir('public/img/parti/')
                ->setUploadedFileNamePattern('[slug].[extension]'),
            TextField::new('name'),
            ColorField::new('color'),
            ColorField::new('colog_bg'),
            TextField::new('president'),
            TextEditorField::new('descriptionFr'),
            TextEditorField::new('descriptionNl'),
            SlugField::new('slug')->setTargetFieldName('name'),
        ];
    }
}
