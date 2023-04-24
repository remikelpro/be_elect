<?php

namespace App\Entity;

use Knp\DoctrineBehaviors\Contract\Entity\TranslatableInterface;
use Knp\DoctrineBehaviors\Model\Translatable\TranslatableTrait;

class AbstractTranslation implements TranslatableInterface
{
    use TranslatableTrait;

    public function __call($method, $arguments)
    {
        return $this->proxyCurrentLocaleTranslation($method, $arguments);
    }    
    
    public function __get($method)
    {
        $arguments=[];
        return $this->proxyCurrentLocaleTranslation($method, $arguments);
    }
}
