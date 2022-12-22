<?php

namespace App\Controller\Admin;

use App\Controller\Admin\Field\TranslationField;
use App\Entity\Parti;
use EasyCorp\Bundle\EasyAdminBundle\Config\Crud;
use EasyCorp\Bundle\EasyAdminBundle\Controller\AbstractCrudController;
use EasyCorp\Bundle\EasyAdminBundle\Field\ColorField;
use EasyCorp\Bundle\EasyAdminBundle\Field\ImageField;
use EasyCorp\Bundle\EasyAdminBundle\Field\SlugField;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextField;
use FOS\CKEditorBundle\Form\Type\CKEditorType;
use EasyCorp\Bundle\EasyAdminBundle\Field\NumberField;

class PartiCrudController extends AbstractCrudController
{
    public static function getEntityFqcn(): string
    {
        return Parti::class;
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
        yield TextField::new('name', 'name')->hideOnForm();
        return [
            ImageField::new('logo')->setBasePath('img/parti/')
                ->setUploadDir('public/img/parti/')
                ->setUploadedFileNamePattern('[slug].[extension]'),
            TextField::new('name'),
            ColorField::new('color'),
            ColorField::new('color_bg'),
            TextField::new('president'),
            TextField::new('description', 'description')->hideOnForm(),
            TranslationField::new('translations', 'translations', [
                'description' => [
                    'field_type' => CKEditorType::class,
                    'required' => true,
                ]
            ])->hideOnIndex(),
            SlugField::new('slug')->setTargetFieldName('name'),
        ];
    }
}
