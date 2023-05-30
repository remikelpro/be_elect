<?php

namespace App\Controller\Admin;

use App\Entity\Resultat;
use EasyCorp\Bundle\EasyAdminBundle\Config\Crud;
use EasyCorp\Bundle\EasyAdminBundle\Controller\AbstractCrudController;
use EasyCorp\Bundle\EasyAdminBundle\Field\AssociationField;
use EasyCorp\Bundle\EasyAdminBundle\Field\NumberField;

class ResultatCrudController extends AbstractCrudController
{
    public static function getEntityFqcn(): string
    {
        return Resultat::class;
    }

    public function configureCrud(Crud $crud): Crud
    {
        return $crud
            ->setFormThemes(
                [
                    '@A2lixTranslationForm/bootstrap_5_layout.html.twig',
                    '@EasyAdmin/crud/form_theme.html.twig',
                    '@FOSCKEditor/Form/ckeditor_widget.html.twig',
                ]
            );
    }

    public function configureFields(string $pageName): iterable
    {
        yield NumberField::new('id', 'id')->hideOnForm();
        yield NumberField::new('totalVote');
        yield NumberField::new('percent');
        yield NumberField::new('numberSubscriber');
        yield NumberField::new('numberSeat');
        yield AssociationField::new('idTypeResultat');
        yield AssociationField::new('idParti');
        yield AssociationField::new('idElection');
        yield AssociationField::new('idCommune');
        yield AssociationField::new('idCanton');
        yield AssociationField::new('idArrondissement');
        yield AssociationField::new('idProvince');
        yield AssociationField::new('idRegion');
    }
}
