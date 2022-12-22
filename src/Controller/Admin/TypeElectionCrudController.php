<?php

namespace App\Controller\Admin;

use App\Controller\Admin\Field\TranslationField;
use App\Entity\TypeElection;
use EasyCorp\Bundle\EasyAdminBundle\Config\Crud;
use EasyCorp\Bundle\EasyAdminBundle\Controller\AbstractCrudController;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextField;
use EasyCorp\Bundle\EasyAdminBundle\Form\Type\SlugType;
use FOS\CKEditorBundle\Form\Type\CKEditorType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use EasyCorp\Bundle\EasyAdminBundle\Field\NumberField;

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
                    '@FOSCKEditor/Form/ckeditor_widget.html.twig',
                ]
            );
    }

    public function configureFields(string $pageName): iterable
    {
        return [
            NumberField::new('id', 'id')->hideOnForm(),
            TextField::new('slug', 'slug')->hideOnForm(),
            TextField::new('name', 'name')->hideOnForm(),
            TextField::new('description', 'description')->hideOnForm(),
            TranslationField::new('translations', 'translations', [
                'name' => [
                    'field_type' => TextType::class,
                    'required' => true,
                ],
                'description' => [
                    'field_type' => CKEditorType::class,
                    'required' => true,
                ],
                'slug' => [
                    'field_type' => SlugType::class,
                    'required' => true,
                    'target' => 'name'
                ],
            ])->hideOnIndex(),
        ];
    }
}
