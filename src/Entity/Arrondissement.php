<?php

namespace App\Entity;

use App\Repository\ArrondissementRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use Knp\DoctrineBehaviors\Contract\Entity\TranslationInterface;
use Knp\DoctrineBehaviors\Contract\Entity\TranslatableInterface;
use Knp\DoctrineBehaviors\Model\Translatable\TranslatableTrait;

#[ORM\Entity(repositoryClass: ArrondissementRepository::class)]
class Arrondissement implements TranslatableInterface
{
    use TranslatableTrait;

    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\ManyToOne(inversedBy: 'arrondissements')]
    #[ORM\JoinColumn(nullable: false)]
    private ?Province $idProvince = null;

    #[ORM\OneToMany(mappedBy: 'idArrondissement', targetEntity: Canton::class, orphanRemoval: true)]
    private Collection $cantons;

    #[ORM\OneToMany(mappedBy: 'idArrondissement', targetEntity: Resultat::class)]
    private Collection $resultats;

    public function __construct()
    {
        $this->cantons = new ArrayCollection();
        $this->resultats = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getIdProvince(): ?Province
    {
        return $this->idProvince;
    }

    public function setIdProvince(?Province $idProvince): self
    {
        $this->idProvince = $idProvince;

        return $this;
    }

    /**
     * @return Collection<int, Canton>
     */
    public function getCantons(): Collection
    {
        return $this->cantons;
    }

    public function addCanton(Canton $canton): self
    {
        if (!$this->cantons->contains($canton)) {
            $this->cantons->add($canton);
            $canton->setIdArrondissement($this);
        }

        return $this;
    }

    public function removeCanton(Canton $canton): self
    {
        if ($this->cantons->removeElement($canton)) {
            // set the owning side to null (unless already changed)
            if ($canton->getIdArrondissement() === $this) {
                $canton->setIdArrondissement(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection<int, Resultat>
     */
    public function getResultats(): Collection
    {
        return $this->resultats;
    }

    public function addResultat(Resultat $resultat): self
    {
        if (!$this->resultats->contains($resultat)) {
            $this->resultats->add($resultat);
            $resultat->setIdArrondissement($this);
        }

        return $this;
    }

    public function removeResultat(Resultat $resultat): self
    {
        if ($this->resultats->removeElement($resultat)) {
            // set the owning side to null (unless already changed)
            if ($resultat->getIdArrondissement() === $this) {
                $resultat->setIdArrondissement(null);
            }
        }

        return $this;
    }
    public function __call($method, $arguments)
    {
        return $this->proxyCurrentLocaleTranslation($method, $arguments);
    }    
    
    public function __get($method)
    {
        $arguments=[];
        return $this->proxyCurrentLocaleTranslation($method, $arguments);
    }
    public function __toString()
    {
        return $this->getName();
    }
}