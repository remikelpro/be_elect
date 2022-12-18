<?php

namespace App\Controller\Admin;

use App\Controller\Admin\Field\TranslationField;
use App\Entity\Commune;
use EasyCorp\Bundle\EasyAdminBundle\Controller\AbstractCrudController;
use EasyCorp\Bundle\EasyAdminBundle\Field\AssociationField;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextField;
use Symfony\Component\Form\Extension\Core\Type\TextType;

class CommuneCrudController extends AbstractCrudController
{
    public static function getEntityFqcn(): string
    {
        return Commune::class;
    }

    public function configureFields(string $pageName): iterable
    {
        return [
            TextField::new('name', 'name')->hideOnForm(),
            TranslationField::new('translations', 'translations', [
                'name' => [
                    'field_type' => TextType::class,
                    'required' => true,
                ],
            ])->hideOnIndex(),
            AssociationField::new('idCanton')
        ];    
    }
}
