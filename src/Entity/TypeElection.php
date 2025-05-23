<?php

namespace App\Entity;

use ApiPlatform\Doctrine\Orm\Filter\SearchFilter;
use ApiPlatform\Metadata\ApiFilter;
use ApiPlatform\Metadata\ApiResource;
use ApiPlatform\Metadata\Get;
use ApiPlatform\Metadata\GetCollection;
use App\Repository\TypeElectionRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Serializer\Annotation\Groups;

#[ORM\Entity(repositoryClass: TypeElectionRepository::class)]
#[ApiResource(normalizationContext: ['groups' => ['read']], operations: [
    new Get(),
    new GetCollection()
])]
#[ApiFilter(SearchFilter::class, properties: [
    'name' => 'partial',
    'title' => 'partial',
])]
class TypeElection extends AbstractTranslation
{

    public const LEGISLATIVES_IDS = [2, 3];
    public const EUROPEENNES_ID = [5];
    public const REGIONALES_IDS = [4, 6, 7, 8];

    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    // private ?string $name = null;

    // private ?string $description = null;

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

    public function getMainIcon(): array
    {
        return match (true) {
            in_array($this->id, self::LEGISLATIVES_IDS) => [
                'src' => 'img/election/icon-legislatives.svg',
                'alt' => 'Élections législatives',
            ],
            in_array($this->id, self::EUROPEENNES_ID) => [
                'src' => 'img/election/icon-europeennes.svg',
                'alt' => 'Une homme politique s’exprime à la tribune devant un micro',
            ],
            in_array($this->id, self::REGIONALES_IDS) => [
                'src' => 'img/election/icon-regionales.svg',
                'alt' => 'Une femme politique s’exprime à la tribune devant un micro',
            ],
            default => [
                'src' => 'img/election/icon-default.svg',
                'alt' => 'Élections',
            ],
        };
    }


    public function getCssClass(): string
    {
        return match (true) {
            in_array($this->id, self::LEGISLATIVES_IDS) || in_array($this->id, self::EUROPEENNES_ID) => 'bg-federal',
            in_array($this->id, self::REGIONALES_IDS) => 'bg-regional',
            default => 'bg-federal',
        };
    }


    #[Groups(['read'])]
    public function getName(): ?string
    {
        /** @var TypeElectionTranslation|null $translation */
        $translation = $this->translate(null, false);
        return $translation ? $translation->getName() : null;
    }


    #[Groups(['read'])]
    public function getTitle(): ?string
    {
        /** @var TypeElectionTranslation|null $translation */
        $translation = $this->translate(null, false);
        return $translation ? $translation->getName() : null;
    }
}
