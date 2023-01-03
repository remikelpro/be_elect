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