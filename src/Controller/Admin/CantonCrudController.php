<?php

namespace App\Controller\Admin;

use App\Controller\Admin\Field\TranslationField;
use App\Entity\Canton;
use EasyCorp\Bundle\EasyAdminBundle\Config\Crud;
use EasyCorp\Bundle\EasyAdminBundle\Controller\AbstractCrudController;
use EasyCorp\Bundle\EasyAdminBundle\Field\AssociationField;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextField;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use EasyCorp\Bundle\EasyAdminBundle\Field\NumberField;

class CantonCrudController extends AbstractCrudController
{
    public static function getEntityFqcn(): string
    {
        return Canton::class;
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
            TextField::new('name', 'name')->hideOnForm(),
            TranslationField::new('translations', 'translations', [
                'name' => [
                    'field_type' => TextType::class,
                    'required' => true,
                ],
            ])->hideOnIndex(),
            AssociationField::new('idArrondissement')
        ];    
    }
}
