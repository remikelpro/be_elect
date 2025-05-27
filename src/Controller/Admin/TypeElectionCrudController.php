<?php

namespace App\Controller\Admin;

use App\Controller\Admin\Field\TranslationField;
use App\Entity\TypeElection;
use EasyCorp\Bundle\EasyAdminBundle\Config\Crud;
use EasyCorp\Bundle\EasyAdminBundle\Controller\AbstractCrudController;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextField;
use EasyCorp\Bundle\EasyAdminBundle\Form\Type\SlugType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use EasyCorp\Bundle\EasyAdminBundle\Field\NumberField;
use EasyCorp\Bundle\EasyAdminBundle\Field\ImageField;
use Symfony\Component\Form\Extension\Core\Type\TextareaType;

class TypeElectionCrudController extends AbstractCrudController
{
    public static function getEntityFqcn(): string
    {
        return TypeElection::class;
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
        yield TextField::new('slug', 'slug')->hideOnForm();
        yield TextField::new('name', 'name')->hideOnForm();
        yield TextField::new('description', 'description')->hideOnForm();
        yield TextField::new('all_about', 'all_about')->hideOnForm();
        yield TextField::new('next_elections', 'next_elections')->hideOnForm();
        yield TextField::new('title', 'title')->hideOnForm();
        yield ImageField::new('logo')->setBasePath('img/election/')
            ->setUploadDir('public/img/election/')
            ->setUploadedFileNamePattern('[slug].[extension]');

        if (Crud::PAGE_DETAIL !== $pageName) {
            yield TranslationField::new('translations', 'translations', [
                'name' => [
                    'field_type' => TextType::class,
                    'required' => true,
                ],
                'description' => [
                    'field_type' => TextareaType::class,
                    'required' => true,
                    'attr' => [
                        'class' => 'use-trumbowyg'
                    ]
                ],
                'slug' => [
                    'field_type' => SlugType::class,
                    'required' => true,
                    'target' => 'name'
                ],
                'title' => [
                    'field_type' => TextType::class,
                    'required' => true,
                ],
                'all_about' => [
                    'field_type' => TextareaType::class,
                    'required' => true,
                    'attr' => [
                        'class' => 'use-trumbowyg'
                    ]
                ],
                'next_elections' => [
                    'field_type' => TextareaType::class,
                    'required' => true,
                    'attr' => [
                        'class' => 'use-trumbowyg'
                    ]
                ],
            ])
                ->hideOnIndex();
        }
    }
}
