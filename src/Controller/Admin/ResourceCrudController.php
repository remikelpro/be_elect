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
use EasyCorp\Bundle\EasyAdminBundle\Form\Type\FileUploadType;
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
        yield NumberField::new('id', 'id')->hideOnForm();
        yield ImageField::new('file')
                ->setFormType(FileUploadType::class)
                ->setUploadDir('public/img/resource/')
                ->hideOnIndex()
                ->setFormTypeOptions(['attr' => [
                        'accept' => 'application/pdf'
                    ]
                ])
                ->setFileConstraints([]);
        yield DateField::new('date');
        yield AssociationField::new('idParti');
        yield AssociationField::new('idElection');
        yield ChoiceField::new('type')->setChoices(Resource::$resourceType);
        yield TextField::new('name', 'name')->hideOnForm();
        yield TextField::new('description', 'description')->hideOnForm();
        yield TextField::new('slug', 'slug')->hideOnForm();
        if (Crud::PAGE_DETAIL !== $pageName) {
            yield TranslationField::new('translations', 'translations', [
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
            ])->hideOnIndex();
        }
    }
}
