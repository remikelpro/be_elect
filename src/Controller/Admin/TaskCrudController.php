<?php

namespace App\Controller\Admin;


use App\Controller\Admin\Field\TranslationField;
use App\Entity\Task;
use EasyCorp\Bundle\EasyAdminBundle\Config\Crud;
use EasyCorp\Bundle\EasyAdminBundle\Controller\AbstractCrudController;
use EasyCorp\Bundle\EasyAdminBundle\Field\IdField;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextEditorField;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextField;
use EasyCorp\Bundle\EasyAdminBundle\Field\BooleanField;
use EasyCorp\Bundle\EasyAdminBundle\Field\NumberField;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use FOS\CKEditorBundle\Form\Type\CKEditorType;

class TaskCrudController extends AbstractCrudController
{
    public static function getEntityFqcn(): string
    {
        return Task::class;
    }

        public function configureCrud(Crud $crud): Crud
    {
        return $crud
            ->setSearchFields(['name'])
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
        yield TextField::new('title', 'title')->hideOnForm();
        yield TextField::new('description', 'description')->hideOnForm();
        yield  BooleanField::new('isDone', 'Completed');


        if (Crud::PAGE_DETAIL !== $pageName) {
            yield TranslationField::new('translations', 'translations', [
                'title' => [
                    'field_type' => TextType::class,
                    'required' => true,
                ],
                'description' => [
                    'field_type' => CKEditorType::class,
                    'required' => true,
                ]
            ])
                ->hideOnIndex();
        }


        //   return [
        //     IdField::new('id')->hideOnForm(),
        //     TextField::new('title'),
        //     TextEditorField::new('description'),
        //     BooleanField::new('isDone', 'Completed') 
        // ];
    }
   
}
