<?php

namespace App\Controller\Admin;

use App\Controller\Admin\Field\TranslationField;
use App\Entity\Article;
use EasyCorp\Bundle\EasyAdminBundle\Config\Crud;
use EasyCorp\Bundle\EasyAdminBundle\Controller\AbstractCrudController;
use EasyCorp\Bundle\EasyAdminBundle\Field\DateTimeField;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextField;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextEditorField;
use FOS\CKEditorBundle\Form\Type\CKEditorType;
use Symfony\Component\Form\Extension\Core\Type\TextType;

class ArticleCrudController extends AbstractCrudController
{
    public static function getEntityFqcn(): string
    {
        return Article::class;
    }

    public function configureCrud(Crud $crud): Crud
    {
        return $crud->setEntityLabelInSingular('Article')
            ->setEntityLabelInPlural('Articles')
            ->setSearchFields(['title', 'content'])
            ->setDefaultSort(['createdAt' => 'DESC']);
    }

    public function configureFields(string $pageName): iterable
    {
        yield TextField::new('title', 'title')->hideOnForm();
        yield TextField::new('content', 'content')->hideOnForm();
        yield TranslationField::new('translations', 'translations', [
            'title' => [
                'field_type' => TextType::class,
                'required' => true,
            ],
            'content' => [
                'field_type' => CKEditorType::class,
                'required' => true,
            ]
        ])
            ->hideOnIndex();
    }
}
