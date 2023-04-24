## Config
composer 2
PHP 8.1

## Assets
``npm run encore dev --watch``

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

1/ php bin/console make:entity
2/ ajouter tous les champs qui ne sont pas traduisible
3/ Creer EntityNameTranslation.php et rajouter les champs traduisible
4/ Extends EntityName avec AbstractTranslation
5/ symfony console make:admin:crud
6/ Modifier EntityCrudController pour ajouter le theme et les champs traduisible
6/ ajouter dans le Dashboard admin src/Controller/Admin/DashboardController
6/ bin/console doctrine:schema:update --force

