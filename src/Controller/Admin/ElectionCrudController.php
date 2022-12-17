<?php

namespace App\Controller\Admin;

use App\Entity\Election;
use EasyCorp\Bundle\EasyAdminBundle\Config\Crud;
use EasyCorp\Bundle\EasyAdminBundle\Controller\AbstractCrudController;
use EasyCorp\Bundle\EasyAdminBundle\Field\ArrayField;
use EasyCorp\Bundle\EasyAdminBundle\Field\AssociationField;
use EasyCorp\Bundle\EasyAdminBundle\Field\DateField;
use EasyCorp\Bundle\EasyAdminBundle\Field\DateTimeField;
use EasyCorp\Bundle\EasyAdminBundle\Field\SlugField;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextField;

class ElectionCrudController extends AbstractCrudController
{
    public static function getEntityFqcn(): string
    {
        return Election::class;
    }

    public function configureCrud(Crud $crud): Crud
    {
        return $crud->setSearchFields(['name'])
        ->addFormTheme('@FOSCKEditor/Form/ckeditor_widget.html.twig');
    }

    public function configureFields(string $pageName): iterable
    {
        yield TextField::new('name');
        yield DateField::new('date');
        yield AssociationField::new('idTypeElection');
        yield SlugField::new('slug')->setTargetFieldName('name');
    }
}
