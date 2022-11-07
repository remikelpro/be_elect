<?php

namespace App\Entity;

use App\Repository\RegionRepository;
use Doctrine\ORM\Mapping as ORM;
use Doctrine\ORM\Mapping\Table;

#[Table(name: 'regions')]
#[ORM\Entity(repositoryClass: RegionRepository::class)]
class Region
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column(name: 'id_region')]
    private ?int $id = null;

    #[ORM\Column(length: 23, nullable: true)]
    private ?string $reNomFr = null;

    #[ORM\Column(length: 16, nullable: true)]
    private ?string $reNomNl = null;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getReNomFr(): ?string
    {
        return $this->reNomFr;
    }

    public function setReNomFr(?string $reNomFr): self
    {
        $this->reNomFr = $reNomFr;

        return $this;
    }

    public function getReNomNl(): ?string
    {
        return $this->reNomNl;
    }

    public function setReNomNl(?string $reNomNl): self
    {
        $this->reNomNl = $reNomNl;

        return $this;
    }
}
