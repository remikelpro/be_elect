<?php

namespace App\Entity;

use App\Repository\CandidatRepository;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: CandidatRepository::class)]
class Candidat
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $fullName = null;

    #[ORM\Column(nullable: true)]
    private ?int $numberOnList = null;

    #[ORM\Column(nullable: true)]
    private ?int $numberOfVote = null;

    #[ORM\Column(nullable: true)]
    private ?int $ballotsAllotedForEligibility = null;

    #[ORM\Column(nullable: true)]
    private ?int $votesObtainedAfterDevolution = null;

    #[ORM\Column(nullable: true)]
    private ?int $ballotsRemainingForDistribution = null;

    #[ORM\Column(nullable: true)]
    private ?int $candidateOrder = null;

    #[ORM\Column]
    private ?bool $isSuccessor = null;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getFullName(): ?string
    {
        return $this->fullName;
    }

    public function setFullName(?string $fullName): self
    {
        $this->fullName = $fullName;

        return $this;
    }

    public function getNumberOnList(): ?int
    {
        return $this->numberOnList;
    }

    public function setNumberOnList(int $numberOnList): self
    {
        $this->numberOnList = $numberOnList;

        return $this;
    }

    public function getNumberOfVote(): ?int
    {
        return $this->numberOfVote;
    }

    public function setNumberOfVote(?int $numberOfVote): self
    {
        $this->numberOfVote = $numberOfVote;

        return $this;
    }

    public function getBallotsAllotedForEligibility(): ?int
    {
        return $this->ballotsAllotedForEligibility;
    }

    public function setBallotsAllotedForEligibility(?int $ballotsAllotedForEligibility): self
    {
        $this->ballotsAllotedForEligibility = $ballotsAllotedForEligibility;

        return $this;
    }

    public function getVotesObtainedAfterDevolution(): ?int
    {
        return $this->votesObtainedAfterDevolution;
    }

    public function setVotesObtainedAfterDevolution(int $votesObtainedAfterDevolution): self
    {
        $this->votesObtainedAfterDevolution = $votesObtainedAfterDevolution;

        return $this;
    }

    public function getBallotsRemainingForDistribution(): ?int
    {
        return $this->ballotsRemainingForDistribution;
    }

    public function setBallotsRemainingForDistribution(?int $ballotsRemainingForDistribution): self
    {
        $this->ballotsRemainingForDistribution = $ballotsRemainingForDistribution;

        return $this;
    }

    public function getCandidateOrder(): ?int
    {
        return $this->candidateOrder;
    }

    public function setCandidateOrder(?int $candidateOrder): self
    {
        $this->candidateOrder = $candidateOrder;

        return $this;
    }

    public function isIsSuccessor(): ?bool
    {
        return $this->isSuccessor;
    }

    public function setIsSuccessor(bool $isSuccessor): self
    {
        $this->isSuccessor = $isSuccessor;

        return $this;
    }
}
