<?php

namespace App\Entity;

use App\Repository\TypeElectionRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: TypeElectionRepository::class)]
class TypeElection extends AbstractTranslation
{

    public const LEGISLATIVES_IDS = [2, 3];
    public const EUROPEENNES_ID = 5;
    public const REGIONALES_IDS = [4, 6, 7, 8];

    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    private ?string $name = null;

    private ?string $description = null;

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

    public function getMainIcon(): string
    {
        return match (true) {
            in_array($this->id, self::LEGISLATIVES_IDS) => 'img/election/icon-legislatives.svg',
            $this->id === self::EUROPEENNES_ID           => 'img/election/icon-europeennes.svg',
            in_array($this->id, self::REGIONALES_IDS)    => 'img/election/icon-regionales.svg',
            default                                       => 'img/election/icon-default.svg',
        };
    }


    public function getCssClass(): string
    {
        return match (true) {
            in_array($this->id, self::LEGISLATIVES_IDS, self::EUROPEENNES_ID)  => 'bg-federal',
            in_array($this->id, self::REGIONALES_IDS)  => 'bg-regional',
            default => 'bg-federal',
        };
    }
}
