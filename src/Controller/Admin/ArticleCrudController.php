<?php

namespace App\Controller\Admin;

use App\Entity\Article;
use Doctrine\DBAL\Types\DateType;
use EasyCorp\Bundle\EasyAdminBundle\Config\Crud;
use EasyCorp\Bundle\EasyAdminBundle\Controller\AbstractCrudController;
use EasyCorp\Bundle\EasyAdminBundle\Field\DateTimeField;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextField;

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
            ->setSearchFields(['titleFr', 'titleNl', 'contentFr', 'contentNl'])
            ->setDefaultSort(['createdAt' => 'DESC']);
    }

    public function configureFields(string $pageName): iterable
    {
        yield TextField::new('titleFr');
        yield TextField::new('titleNl');
        yield TextField::new('contentFr');
        yield TextField::new('contentNl');

        $createdAt = DateTimeField::new('createdAt')->setFormTypeOptions([
            'html5' => true,
            'years' => range(date('Y'), date('Y') + 5),
            'widget' => 'single_text',
        ]);
        if (Crud::PAGE_EDIT === $pageName) {
            yield $createdAt->setFormTypeOption('disabled', true);
        } else {
            yield $createdAt;
        }
    }

    /*
    public function configureFields(string $pageName): iterable
    {
        return [
            IdField::new('id'),
            TextField::new('title'),
            TextEditorField::new('description'),
        ];
    }
    */
}
