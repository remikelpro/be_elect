<?php

namespace App\Entity;

use ApiPlatform\Metadata\ApiResource;
use App\Repository\GovernmentRepository;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: GovernmentRepository::class)]
#[ApiResource]
class Government
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $name = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $firstname = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $lastname = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $positionOpen = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $positionClosed = null;

    #[ORM\Column(nullable: true)]
    private ?int $positionRec = null;

    #[ORM\Column(type: Types::SMALLINT, nullable: true)]
    private ?int $gender = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $primeMinister = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $governmentName = null;

    #[ORM\Column(nullable: true)]
    private ?int $legislatureYear = null;

    #[ORM\Column(nullable: true)]
    private ?int $governmentYear = null;

    #[ORM\Column(nullable: true)]
    private ?int $totalMinister = null;

    #[ORM\Column(nullable: true)]
    private ?int $totalSecretary = null;

    #[ORM\OneToOne(mappedBy: 'government', cascade: ['persist', 'remove'])]
    private ?GovernmentParti $governmentParti = null;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getName(): ?string
    {
        return $this->name;
    }

    public function setName(?string $name): self
    {
        $this->name = $name;

        return $this;
    }

    public function getFirstname(): ?string
    {
        return $this->firstname;
    }

    public function setFirstname(?string $firstname): self
    {
        $this->firstname = $firstname;

        return $this;
    }

    public function getLastname(): ?string
    {
        return $this->lastname;
    }

    public function setLastname(?string $lastname): self
    {
        $this->lastname = $lastname;

        return $this;
    }

    public function getPositionOpen(): ?string
    {
        return $this->positionOpen;
    }

    public function setPositionOpen(?string $positionOpen): self
    {
        $this->positionOpen = $positionOpen;

        return $this;
    }

    public function getPositionClosed(): ?string
    {
        return $this->positionClosed;
    }

    public function setPositionClosed(?string $positionClosed): self
    {
        $this->positionClosed = $positionClosed;

        return $this;
    }

    public function getPositionRec(): ?int
    {
        return $this->positionRec;
    }

    public function setPositionRec(?int $positionRec): self
    {
        $this->positionRec = $positionRec;

        return $this;
    }

    public function getGender(): ?int
    {
        return $this->gender;
    }

    public function setGender(?int $gender): self
    {
        $this->gender = $gender;

        return $this;
    }

    public function getPrimeMinister(): ?string
    {
        return $this->primeMinister;
    }

    public function setPrimeMinister(?string $primeMinister): self
    {
        $this->primeMinister = $primeMinister;

        return $this;
    }

    public function getGovernmentName(): ?string
    {
        return $this->governmentName;
    }

    public function setGovernmentName(?string $governmentName): self
    {
        $this->governmentName = $governmentName;

        return $this;
    }

    public function getLegislatureYear(): ?int
    {
        return $this->legislatureYear;
    }

    public function setLegislatureYear(?int $legislatureYear): self
    {
        $this->legislatureYear = $legislatureYear;

        return $this;
    }

    public function getGovernmentYear(): ?int
    {
        return $this->governmentYear;
    }

    public function setGovernmentYear(?int $governmentYear): self
    {
        $this->governmentYear = $governmentYear;

        return $this;
    }

    public function getTotalMinister(): ?int
    {
        return $this->totalMinister;
    }

    public function setTotalMinister(?int $totalMinister): self
    {
        $this->totalMinister = $totalMinister;

        return $this;
    }

    public function getTotalSecretary(): ?int
    {
        return $this->totalSecretary;
    }

    public function setTotalSecretary(?int $totalSecretary): self
    {
        $this->totalSecretary = $totalSecretary;

        return $this;
    }

    public function getGovernmentParti(): ?GovernmentParti
    {
        return $this->governmentParti;
    }

    public function setGovernmentParti(?GovernmentParti $governmentParti): self
    {
        // unset the owning side of the relation if necessary
        if ($governmentParti === null && $this->governmentParti !== null) {
            $this->governmentParti->setGovernment(null);
        }

        // set the owning side of the relation if necessary
        if ($governmentParti !== null && $governmentParti->getGovernment() !== $this) {
            $governmentParti->setGovernment($this);
        }

        $this->governmentParti = $governmentParti;

        return $this;
    }
}
