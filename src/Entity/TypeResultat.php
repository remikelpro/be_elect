<?php

namespace App\Entity;

use App\Repository\TypeResultatRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: TypeResultatRepository::class)]
class TypeResultat
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 255)]
    private ?string $nameFr = null;

    #[ORM\Column(length: 255)]
    private ?string $nameNl = null;

    #[ORM\OneToMany(mappedBy: 'idTypeResultat', targetEntity: Resultat::class)]
    private Collection $resultats;

    public function __construct()
    {
        $this->resultats = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getNameFr(): ?string
    {
        return $this->nameFr;
    }

    public function setNameFr(string $nameFr): self
    {
        $this->nameFr = $nameFr;

        return $this;
    }

    public function getNameNl(): ?string
    {
        return $this->nameNl;
    }

    public function setNameNl(string $nameNl): self
    {
        $this->nameNl = $nameNl;

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
            $resultat->setIdTypeResultat($this);
        }

        return $this;
    }

    public function removeResultat(Resultat $resultat): self
    {
        if ($this->resultats->removeElement($resultat)) {
            // set the owning side to null (unless already changed)
            if ($resultat->getIdTypeResultat() === $this) {
                $resultat->setIdTypeResultat(null);
            }
        }

        return $this;
    }
}
