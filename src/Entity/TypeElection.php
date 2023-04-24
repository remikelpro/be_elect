<?php

namespace App\Entity;

use App\Repository\TypeElectionRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: TypeElectionRepository::class)]
class TypeElection extends AbstractTranslation
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $logo = null;

    #[ORM\OneToMany(mappedBy: 'idTypeElection', targetEntity: Election::class)]
    private Collection $elections;

    public function __construct()
    {
        $this->elections = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getLogo(): ?string
    {
        return $this->logo;
    }

    public function setLogo(?string $logo): self
    {
        $this->logo = $logo;

        return $this;
    }

    /**
     * @return Collection<int, Election>
     */
    public function getElections(): Collection
    {
        return $this->elections;
    }

    public function addElection(Election $election): self
    {
        if (!$this->elections->contains($election)) {
            $this->elections->add($election);
            $election->setIdTypeElection($this);
        }

        return $this;
    }

    public function removeElection(Election $election): self
    {
        if ($this->elections->removeElement($election)) {
            // set the owning side to null (unless already changed)
            if ($election->getIdTypeElection() === $this) {
                $election->setIdTypeElection(null);
            }
        }

        return $this;
    }

    public function __toString()
    {
        return $this->getName();
    }
}
