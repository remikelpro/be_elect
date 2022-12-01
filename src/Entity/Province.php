<?php

namespace App\Entity;

use App\Repository\ProvinceRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: ProvinceRepository::class)]
class Province
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 255)]
    private ?string $nameFr = null;

    #[ORM\Column(length: 255)]
    private ?string $nameNl = null;

    #[ORM\ManyToOne(inversedBy: 'provinces')]
    #[ORM\JoinColumn(nullable: false)]
    private ?Region $idRegion = null;

    #[ORM\OneToMany(mappedBy: 'idProvince', targetEntity: Arrondissement::class, orphanRemoval: true)]
    private Collection $arrondissements;

    #[ORM\OneToMany(mappedBy: 'idProvince', targetEntity: Resultat::class)]
    private Collection $resultats;

    public function __construct()
    {
        $this->arrondissements = new ArrayCollection();
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

    public function getIdRegion(): ?Region
    {
        return $this->idRegion;
    }

    public function setIdRegion(?Region $idRegion): self
    {
        $this->idRegion = $idRegion;

        return $this;
    }

    /**
     * @return Collection<int, Arrondissement>
     */
    public function getArrondissements(): Collection
    {
        return $this->arrondissements;
    }

    public function addArrondissement(Arrondissement $arrondissement): self
    {
        if (!$this->arrondissements->contains($arrondissement)) {
            $this->arrondissements->add($arrondissement);
            $arrondissement->setIdProvince($this);
        }

        return $this;
    }

    public function removeArrondissement(Arrondissement $arrondissement): self
    {
        if ($this->arrondissements->removeElement($arrondissement)) {
            // set the owning side to null (unless already changed)
            if ($arrondissement->getIdProvince() === $this) {
                $arrondissement->setIdProvince(null);
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
            $resultat->setIdProvince($this);
        }

        return $this;
    }

    public function removeResultat(Resultat $resultat): self
    {
        if ($this->resultats->removeElement($resultat)) {
            // set the owning side to null (unless already changed)
            if ($resultat->getIdProvince() === $this) {
                $resultat->setIdProvince(null);
            }
        }

        return $this;
    }
}
