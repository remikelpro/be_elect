## Config
composer 2
PHP 8.1

## Assets
``npx encore dev --watch``


## translate
``bin/console translation:extract nl --force``

## Ajouter CRUD dans l'admin
``symfony console make:admin:crud``

## Entity avec traduction
Mettre les champs dans EntityNameTranslation.php
rajouter les traits et implements
Ajouter dans Entity.php
``    public function __call($method, $arguments)
    {
        return $this->proxyCurrentLocaleTranslation($method, $arguments);
    }    
    
    public function __get($method)
    {
        $arguments=[];
        return $this->proxyCurrentLocaleTranslation($method, $arguments);
    }
``

``bin/console doctrine:schema:update --force``

## Etapes lors de l'ajout de nouvelles entity

1/ php bin/console make:entity
2/ ajouter tous les champs qui ne sont pas traduisibles
3/ Creer EntityNameTranslation.php et rajouter les champs traduisibles
4/ Extends EntityName avec AbstractTranslation
5/ symfony console make:admin:crud
6/ Modifier EntityCrudController pour ajouter le theme et les champs traduisible
6/ ajouter dans le Dashboard admin src/Controller/Admin/DashboardController
6/ bin/console doctrine:schema:update --force

# Récupérer base de données du site
1/ export .sql depuis le site
2/ mysql -u admin -p -e "DROP DATABASE be_elect; CREATE DATABASE be_elect;"
3/ modifier import.sql pour mettre le bon fichier dans SOURCE
4/ mysql -u admin -p be_elect < import.sql
5/ récupérer les images dans public/img/parti

# Particularité
Easyadmin ne gère pas très bien les traductions, j'ai donc crée src/Controller/Admin/Field/TranslationField.php
Pour que les pages crudAction d'easyadmin ne plante pas, il faut exclure ainsi par exemple :
        if (Crud::PAGE_DETAIL !== $pageName) {
            yield TranslationField::new('translations', 'translations', [
                'title' => [
                    'field_type' => TextType::class,
                    'required' => true,
                ],
                'content' => [
                    'field_type' => TextareaType::class,
                    'required' => true,
                    'attr' => [
                        'class' => 'use-trumbowyg'
                    ]
                ]
            ])
                ->hideOnIndex();
        }

