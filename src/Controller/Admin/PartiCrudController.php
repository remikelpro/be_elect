<?php

namespace App\Controller\Admin;

use App\Controller\Admin\Field\TranslationField;
use App\Entity\Parti;
use EasyCorp\Bundle\EasyAdminBundle\Config\Crud;
use EasyCorp\Bundle\EasyAdminBundle\Controller\AbstractCrudController;
use EasyCorp\Bundle\EasyAdminBundle\Field\BooleanField;
use EasyCorp\Bundle\EasyAdminBundle\Field\ChoiceField;
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
        yield BooleanField::new('main');
        yield ImageField::new('logo')->setBasePath('img/parti/')
            ->setUploadDir('public/img/parti/')
            ->setUploadedFileNamePattern('[slug].[extension]');
        yield TextField::new('acronym');
        yield ChoiceField::new('federal')->setChoices(Parti::$federalType);
        yield ChoiceField::new('place')->setChoices(Parti::$placeType);
        yield ColorField::new('color');
        yield ColorField::new('color_bg');
        yield TextField::new('description', 'description')->hideOnForm()->hideOnIndex();
        if (Crud::PAGE_DETAIL !== $pageName) {
            yield TranslationField::new('translations', 'translations', [
                'description' => [
                    'field_type' => CKEditorType::class,
                    'required' => true,
                ]
            ])->hideOnIndex();
        }
        yield TextField::new('about', 'about')->hideOnForm()->hideOnIndex();
        if (Crud::PAGE_DETAIL !== $pageName) {
            yield TranslationField::new('translations', 'translations', [
                'about' => [
                    'field_type' => CKEditorType::class,
                    'required' => true,
                ]
            ])->hideOnIndex();
        }
        yield TextField::new('twitter')->hideOnIndex();
        yield TextField::new('facebook')->hideOnIndex();
        yield TextField::new('instagram')->hideOnIndex();
        yield TextField::new('website')->hideOnIndex();
        yield TextField::new('tiktok')->hideOnIndex();
        yield SlugField::new('slug')->setTargetFieldName('acronym');
    }
}
