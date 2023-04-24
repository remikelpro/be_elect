<?php

namespace App\Controller\Admin;

use App\Controller\Admin\Field\TranslationField;
use App\Entity\Resource;
use EasyCorp\Bundle\EasyAdminBundle\Config\Crud;
use EasyCorp\Bundle\EasyAdminBundle\Controller\AbstractCrudController;
use EasyCorp\Bundle\EasyAdminBundle\Field\AssociationField;
use EasyCorp\Bundle\EasyAdminBundle\Field\ChoiceField;
use EasyCorp\Bundle\EasyAdminBundle\Field\DateField;
use EasyCorp\Bundle\EasyAdminBundle\Field\ImageField;
use EasyCorp\Bundle\EasyAdminBundle\Field\NumberField;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextField;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use EasyCorp\Bundle\EasyAdminBundle\Form\Type\SlugType;
use FOS\CKEditorBundle\Form\Type\CKEditorType;

class ResourceCrudController extends AbstractCrudController
{
    public static function getEntityFqcn(): string
    {
        return Resource::class;
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
        return [
            NumberField::new('id', 'id')->hideOnForm(),

            ImageField::new('file')->setBasePath('img/resource/')
                ->setUploadDir('public/img/resource/')
                ->setUploadedFileNamePattern('[slug].[extension]'),
            DateField::new('date'),
            AssociationField::new('idParti'),
            AssociationField::new('idElection'),
            ChoiceField::new('type')->setChoices(Resource::$resourceType),
            TextField::new('name', 'name')->hideOnForm(),
            TextField::new('description', 'description')->hideOnForm(),
            TextField::new('slug', 'slug')->hideOnForm(),
            TranslationField::new('translations', 'translations', [
                'name' => [
                    'field_type' => TextType::class,
                    'required' => true,
                ],
                'slug' => [
                    'field_type' => SlugType::class,
                    'required' => true,
                    'target' => 'name'
                ],
                'description' => [
                    'field_type' => CKEditorType::class,
                    'required' => true,
                ]
            ])->hideOnIndex()
        ];
    }
}
