<?php

namespace App\Entity;

use ApiPlatform\Doctrine\Orm\Filter\OrderFilter;
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
#[ApiFilter(SearchFilter::class, properties: [
    'idElection.idTypeElection' => 'exact',
    'idParty.id' => 'exact',
    'idElection.id' => 'exact',
    'idCommune.id' => 'exact',
    'idCanton.id' => 'exact',
    'idArrondissement.id' => 'exact',
    'idProvince.id' => 'exact',
    'idRegion.id' => 'exact',
    'idTypeResultat.id' => 'exact'
])]
#[ApiFilter(
    OrderFilter::class,
    properties: [
        'id',
        'totalVote',
        'percent',
        'numberSubscriber',
        'numberSeat',
        'idParty.name',
        'idElection.name',
        'idCommune.name',
        'idCanton.name',
        'idArrondissement.name',
        'idProvince.name',
        'idRegion.name',
        'idTypeResultat.name'
    ],
    arguments: ['orderParameterName' => 'order']
)]
#[ApiResource(normalizationContext: ['groups' => ['read']], operations: [
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
    private ?int $totalVote = null;

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

    #[ORM\Column(nullable: true)]
    private ?int $headVote = null;

    #[ORM\Column(nullable: true)]
    private ?int $titularVote = null;

    #[ORM\Column(nullable: true)]
    private ?int $alternateVote = null;

    #[ORM\Column(nullable: true)]
    private ?int $blankVote = null;

    #[ORM\Column(nullable: true)]
    private ?int $eligibleVoters = null;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getTotalVote(): ?int
    {
        return $this->totalVote;
    }

    public function setTotalVote(?int $totalVote): self
    {
        $this->totalVote = $totalVote;

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
        return 'Result #' . $this->getId();
    }

    public function getHeadVote(): ?int
    {
        return $this->headVote;
    }

    public function setHeadVote(?int $headVote): self
    {
        $this->headVote = $headVote;

        return $this;
    }

    public function getTitularVote(): ?int
    {
        return $this->titularVote;
    }

    public function setTitularVote(?int $titularVote): self
    {
        $this->titularVote = $titularVote;

        return $this;
    }

    public function getAlternateVote(): ?int
    {
        return $this->alternateVote;
    }

    public function setAlternateVote(?int $alternateVote): self
    {
        $this->alternateVote = $alternateVote;

        return $this;
    }

    public function getBlankVote(): ?int
    {
        return $this->blankVote;
    }

    public function setBlankVote(?int $blankVote): self
    {
        $this->blankVote = $blankVote;

        return $this;
    }

    public function getEligibleVoters(): ?int
    {
        return $this->eligibleVoters;
    }

    public function setEligibleVoters(?int $eligibleVoters): self
    {
        $this->eligibleVoters = $eligibleVoters;

        return $this;
    }
}
