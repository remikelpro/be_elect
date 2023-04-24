<?php

namespace App\Entity;

use ApiPlatform\Metadata\ApiResource;
use App\Repository\LeaderRepository;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: LeaderRepository::class)]
#[ApiResource]
class Leader
{
    public static array $selectionType = [
        "delegate" => 0,
        "eligible" => 1,
        "council" => 2
    ];
    public static array $reasonType = [
        "pressure" => 0,
        "resign" => 1,
        "end" => 2,
        "force_majeure" => 3
    ];
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 255)]
    private ?string $name = null;

    #[ORM\Column(type: Types::SMALLINT, nullable: true)]
    private ?int $selection = null;

    #[ORM\Column(nullable: true)]
    private ?float $score = null;

    #[ORM\Column(nullable: true)]
    private ?int $n_candidate = null;

    #[ORM\Column(type: Types::DATE_MUTABLE, nullable: true)]
    private ?\DateTimeInterface $mandat_start = null;

    #[ORM\Column(type: Types::DATE_MUTABLE, nullable: true)]
    private ?\DateTimeInterface $mandat_end = null;

    #[ORM\Column(type: Types::SMALLINT, nullable: true)]
    private ?int $reason_end = null;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getName(): ?string
    {
        return $this->name;
    }

    public function setName(string $name): self
    {
        $this->name = $name;

        return $this;
    }

    public function getSelection(): ?int
    {
        return $this->selection;
    }

    public function setSelection(?int $selection): self
    {
        $this->selection = $selection;

        return $this;
    }

    public function getScore(): ?float
    {
        return $this->score;
    }

    public function setScore(?float $score): self
    {
        $this->score = $score;

        return $this;
    }

    public function getNCandidate(): ?int
    {
        return $this->n_candidate;
    }

    public function setNCandidate(?int $n_candidate): self
    {
        $this->n_candidate = $n_candidate;

        return $this;
    }

    public function getMandatStart(): ?\DateTimeInterface
    {
        return $this->mandat_start;
    }

    public function setMandatStart(?\DateTimeInterface $mandat_start): self
    {
        $this->mandat_start = $mandat_start;

        return $this;
    }

    public function getMandatEnd(): ?\DateTimeInterface
    {
        return $this->mandat_end;
    }

    public function setMandatEnd(?\DateTimeInterface $mandat_end): self
    {
        $this->mandat_end = $mandat_end;

        return $this;
    }

    public function getReasonEnd(): ?int
    {
        return $this->reason_end;
    }

    public function setReasonEnd(?int $reason_end): self
    {
        $this->reason_end = $reason_end;

        return $this;
    }
}
