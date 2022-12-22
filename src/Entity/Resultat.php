<?php

namespace App\Entity;

use ApiPlatform\Doctrine\Orm\Filter\SearchFilter;
use ApiPlatform\Metadata\ApiFilter;
use ApiPlatform\Metadata\ApiResource;
use App\Repository\ResultatRepository;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Serializer\Annotation\Groups;
use ApiPlatform\Metadata\Get;
use ApiPlatform\Metadata\GetCollection;

#[ORM\Entity(repositoryClass: ResultatRepository::class)]
#[ORM\HasLifecycleCallbacks]
#[ApiFilter(SearchFilter::class, properties: ['idElection.id' => 'exact', 'idElection.idTypeElection' => 'exact'])]
#[ApiResource(normalizationContext: ['groups' => ['read']],operations: [
    new Get(),
    new GetCollection()
])]
class Resultat
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    #[Groups(['read'])]
    private ?int $id = null;

    #[ORM\Column(nullable: true)]
    #[Groups(['read'])]
    private ?int $numberBallot = null;

    #[ORM\Column(nullable: true)]
    #[Groups(['read'])]
    private ?float $percent = null;

    #[ORM\Column(nullable: true)]
    #[Groups(['read'])]
    private ?int $numberSubscriber = null;

    #[ORM\Column(nullable: true)]
    #[Groups(['read'])]
    private ?int $numberSeat = null;

    #[ORM\ManyToOne(inversedBy: 'resultats')]
    #[Groups(['read'])]
    private ?Parti $idParty = null;

    #[ORM\ManyToOne(inversedBy: 'resultats')]
    #[Groups(['read'])]
    private ?Election $idElection = null;

    #[ORM\ManyToOne(inversedBy: 'resultats')]
    #[Groups(['read'])]
    private ?Commune $idCommune = null;

    #[ORM\ManyToOne(inversedBy: 'resultats')]
    #[Groups(['read'])]
    private ?Canton $idCanton = null;

    #[ORM\ManyToOne(inversedBy: 'resultats')]
    #[Groups(['read'])]
    private ?Arrondissement $idArrondissement = null;

    #[ORM\ManyToOne(inversedBy: 'resultats')]
    #[Groups(['read'])]
    private ?Province $idProvince = null;

    #[ORM\ManyToOne(inversedBy: 'resultats')]
    #[Groups(['read'])]
    private ?Region $idRegion = null;

    #[ORM\ManyToOne(inversedBy: 'resultats')]
    #[Groups(['read'])]
    private ?TypeResultat $idTypeResultat = null;

    #[ORM\Column]
    #[Groups(['read'])]
    private ?\DateTimeImmutable $createdAt = null;

    #[ORM\Column]
    #[Groups(['read'])]
    private ?\DateTimeImmutable $updatedAt = null;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getNumberBallot(): ?int
    {
        return $this->numberBallot;
    }

    public function setNumberBallot(?int $numberBallot): self
    {
        $this->numberBallot = $numberBallot;

        return $this;
    }

    public function getPercent(): ?float
    {
        return $this->percent;
    }

    public function setPercent(?float $percent): self
    {
        $this->percent = $percent;

        return $this;
    }

    public function getNumberSubscriber(): ?int
    {
        return $this->numberSubscriber;
    }

    public function setNumberSubscriber(?int $numberSubscriber): self
    {
        $this->numberSubscriber = $numberSubscriber;

        return $this;
    }

    public function getNumberSeat(): ?int
    {
        return $this->numberSeat;
    }

    public function setNumberSeat(?int $numberSeat): self
    {
        $this->numberSeat = $numberSeat;

        return $this;
    }

    public function getIdParty(): ?Parti
    {
        return $this->idParty;
    }

    public function setIdParty(?Parti $idParty): self
    {
        $this->idParty = $idParty;

        return $this;
    }

    public function getIdElection(): ?Election
    {
        return $this->idElection;
    }

    public function setIdElection(?Election $idElection): self
    {
        $this->idElection = $idElection;

        return $this;
    }

    public function getIdCommune(): ?Commune
    {
        return $this->idCommune;
    }

    public function setIdCommune(?Commune $idCommune): self
    {
        $this->idCommune = $idCommune;

        return $this;
    }

    public function getIdCanton(): ?Canton
    {
        return $this->idCanton;
    }

    public function setIdCanton(?Canton $idCanton): self
    {
        $this->idCanton = $idCanton;

        return $this;
    }

    public function getIdArrondissement(): ?Arrondissement
    {
        return $this->idArrondissement;
    }

    public function setIdArrondissement(?Arrondissement $idArrondissement): self
    {
        $this->idArrondissement = $idArrondissement;

        return $this;
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

    public function getIdRegion(): ?Region
    {
        return $this->idRegion;
    }

    public function setIdRegion(?Region $idRegion): self
    {
        $this->idRegion = $idRegion;

        return $this;
    }

    public function getIdTypeResultat(): ?TypeResultat
    {
        return $this->idTypeResultat;
    }

    public function setIdTypeResultat(?TypeResultat $idTypeResultat): self
    {
        $this->idTypeResultat = $idTypeResultat;

        return $this;
    }
    public function getCreatedAt(): ?\DateTimeImmutable
    {
        return $this->createdAt;
    }

    public function setCreatedAt(\DateTimeImmutable $createdAt): self
    {
        $this->createdAt = $createdAt;

        return $this;
    }

    public function getUpdatedAt(): ?\DateTimeImmutable
    {
        return $this->updatedAt;
    }

    public function setUpdatedAt(\DateTimeImmutable $updatedAt): self
    {
        $this->updatedAt = $updatedAt;

        return $this;
    }

    #[ORM\PrePersist]
    public function setCreatedAtValue(): void
    {
        $this->updatedAt = new \DateTimeImmutable();
        $this->createdAt = new \DateTimeImmutable();
    }


    #[ORM\PreUpdate]
    public function setUpdatedAtAutomatically()
    {
        $this->updatedAt = new \DateTimeImmutable();
    }
    public function __toString()
    {
        return 'Result #' .$this->getId();
    }
}
