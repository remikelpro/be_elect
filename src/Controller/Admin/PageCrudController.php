<?php

namespace App\Controller\Admin;

use App\Controller\Admin\Field\TranslationField;
use App\Entity\Page;
use EasyCorp\Bundle\EasyAdminBundle\Config\Crud;
use EasyCorp\Bundle\EasyAdminBundle\Controller\AbstractCrudController;
use EasyCorp\Bundle\EasyAdminBundle\Field\AssociationField;
use EasyCorp\Bundle\EasyAdminBundle\Field\BooleanField;
use EasyCorp\Bundle\EasyAdminBundle\Field\NumberField;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextField;
use EasyCorp\Bundle\EasyAdminBundle\Form\Type\SlugType;
use FOS\CKEditorBundle\Form\Type\CKEditorType;
use Symfony\Component\Form\Extension\Core\Type\TextType;

class PageCrudController extends AbstractCrudController
{
    public static function getEntityFqcn(): string
    {
        return Page::class;
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
            NumberField::new('position'),
            AssociationField::new('idParent'),
            BooleanField::new('showInMenu'),
            TextField::new('title', 'title')->hideOnForm(),
            TextField::new('content', 'content')->hideOnForm(),
            TextField::new('slug', 'slug')->hideOnForm(),
            TranslationField::new('translations', 'translations', [
                'title' => [
                    'field_type' => TextType::class,
                    'required' => true,
                ],
                'slug' => [
                    'field_type' => SlugType::class,
                    'required' => true,
                    'target' => 'title'
                ],
                'content' => [
                    'field_type' => CKEditorType::class,
                    'required' => true,
                ]
            ])->hideOnIndex()
        ];
    }
}
