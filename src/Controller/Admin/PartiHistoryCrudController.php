<?php

namespace App\Controller\Admin;

use App\Controller\Admin\Field\TranslationField;
use App\Entity\PartiHistory;
use EasyCorp\Bundle\EasyAdminBundle\Config\Crud;
use EasyCorp\Bundle\EasyAdminBundle\Controller\AbstractCrudController;
use EasyCorp\Bundle\EasyAdminBundle\Field\AssociationField;
use EasyCorp\Bundle\EasyAdminBundle\Field\ImageField;
use EasyCorp\Bundle\EasyAdminBundle\Field\NumberField;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextField;
use Symfony\Component\Form\Extension\Core\Type\TextareaType;

class PartiHistoryCrudController extends AbstractCrudController
{
    public static function getEntityFqcn(): string
    {
        return PartiHistory::class;
    }


    public function configureCrud(Crud $crud): Crud
    {
        return $crud
            ->setFormThemes(
                [
                    '@A2lixTranslationForm/bootstrap_5_layout.html.twig',
                    '@EasyAdmin/crud/form_theme.html.twig',
                ]
            );
    }

    public function configureFields(string $pageName): iterable
    {
        yield NumberField::new('id', 'id')->hideOnForm();
        yield NumberField::new('year');
        yield TextField::new('description', 'description')->hideOnForm();

        if (Crud::PAGE_DETAIL !== $pageName) {
            yield TranslationField::new('translations', 'translations', [
                'description' => [
                    'field_type' => TextareaType::class,
                    'required' => true,
                    'attr' => [
                        'class' => 'use-trumbowyg'
                    ]
                ]
            ])->hideOnIndex();
        }

        yield AssociationField::new('parti');
    }
}
