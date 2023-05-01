<?php

namespace App\Entity;

use ApiPlatform\Doctrine\Orm\Filter\SearchFilter;
use ApiPlatform\Metadata\ApiFilter;
use ApiPlatform\Metadata\ApiResource;
use App\Repository\PartiRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;
use JsonSerializable;
use Symfony\Component\Serializer\Annotation\Groups;
use ApiPlatform\Metadata\Get;
use ApiPlatform\Metadata\GetCollection;

#[ORM\Entity(repositoryClass: PartiRepository::class)]
#[ApiResource(normalizationContext: ['groups' => ['read']], operations: [
    new Get(),
    new GetCollection()
])]
#[ApiFilter(SearchFilter::class, properties: [
    'acronym' => 'partial',
    'name' => 'partial',
])]
class Parti extends AbstractTranslation implements JsonSerializable
{
    public static array $federalType = [
        'non-federal' => 0,
        'federal' => 1,
        'disappeared' => 2
    ];
    public static array $placeType = [
        'flandre' => 0,
        'brussel' => 1,
        'wallonie' => 2,
        'germanophone' => 3
    ];

    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    #[Groups(['read'])]
    private ?int $id = null;

    #[ORM\Column(length: 255)]
    #[Groups(['read'])]
    private ?string $acronym = null;

    #[ORM\Column(length: 255, nullable: true)]
    #[Groups(['read'])]
    private ?string $logo = null;

    #[ORM\Column(length: 255, nullable: true)]
    #[Groups(['read'])]
    private ?string $color = null;

    #[ORM\Column(length: 255, nullable: true)]
    #[Groups(['read'])]
    private ?string $color_bg = null;

    #[ORM\OneToMany(mappedBy: 'idParty', targetEntity: Resultat::class)]
    private Collection $resultats;

    #[ORM\Column(length: 255)]
    private ?string $slug = null;

    #[ORM\OneToMany(mappedBy: 'idParti', targetEntity: Resource::class)]
    private Collection $resources;

    #[ORM\OneToMany(mappedBy: 'parti', targetEntity: Member::class, orphanRemoval: true)]
    private Collection $members;

    #[ORM\OneToMany(mappedBy: 'parti', targetEntity: Leader::class)]
    private Collection $leaders;

    #[ORM\OneToMany(mappedBy: 'parti', targetEntity: PartiName::class)]
    private Collection $partiNames;

    #[ORM\OneToMany(mappedBy: 'parti', targetEntity: PartiHistory::class)]
    private Collection $partiHistories;

    #[ORM\Column(type: Types::SMALLINT, nullable: true)]
    private ?int $federal = null;

    #[ORM\Column(type: Types::SMALLINT, nullable: true)]
    private ?int $place = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $twitter = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $facebook = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $instagram = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $website = null;

    #[ORM\Column(type: Types::TEXT, nullable: true)]
    private ?string $about = null;

    public function __construct()
    {
        $this->resultats = new ArrayCollection();
        $this->resources = new ArrayCollection();
        $this->members = new ArrayCollection();
        $this->leaders = new ArrayCollection();
        $this->partiNames = new ArrayCollection();
        $this->partiHistories = new ArrayCollection();
    }

    public function __toString()
    {
        return $this->acronym;
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getAcronym(): ?string
    {
        return $this->acronym;
    }

    public function setAcronym(string $acronym): self
    {
        $this->acronym = $acronym;

        return $this;
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

    public function getColor(): ?string
    {
        return $this->color;
    }

    public function setColor(?string $color): self
    {
        $this->color = $color;

        return $this;
    }

    public function getColorBg(): ?string
    {
        return $this->color_bg;
    }

    public function setColorBg(?string $color_bg): self
    {
        $this->color_bg = $color_bg;

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
            $resultat->setIdParty($this);
        }

        return $this;
    }

    public function removeResultat(Resultat $resultat): self
    {
        if ($this->resultats->removeElement($resultat)) {
            // set the owning side to null (unless already changed)
            if ($resultat->getIdParty() === $this) {
                $resultat->setIdParty(null);
            }
        }

        return $this;
    }

    public function getSlug(): ?string
    {
        return $this->slug;
    }

    public function setSlug(string $slug): self
    {
        $this->slug = $slug;

        return $this;
    }

    public function jsonSerialize()
    {
        return array(
            'id' => $this->id,
            'value' => $this->id,
            'acronym' => $this->acronym,
            'text' => $this->acronym,
            'slug'=> $this->slug,
        );
    }

    /**
     * @return Collection<int, Resource>
     */
    public function getResources(): Collection
    {
        return $this->resources;
    }

    public function addResource(Resource $resource): self
    {
        if (!$this->resources->contains($resource)) {
            $this->resources->add($resource);
            $resource->setIdParti($this);
        }

        return $this;
    }

    public function removeResource(Resource $resource): self
    {
        if ($this->resources->removeElement($resource)) {
            // set the owning side to null (unless already changed)
            if ($resource->getIdParti() === $this) {
                $resource->setIdParti(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection<int, Member>
     */
    public function getMembers(): Collection
    {
        return $this->members;
    }

    public function addMember(Member $member): self
    {
        if (!$this->members->contains($member)) {
            $this->members->add($member);
            $member->setParti($this);
        }

        return $this;
    }

    public function removeMember(Member $member): self
    {
        if ($this->members->removeElement($member)) {
            // set the owning side to null (unless already changed)
            if ($member->getParti() === $this) {
                $member->setParti(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection<int, Leader>
     */
    public function getLeaders(): Collection
    {
        return $this->leaders;
    }

    public function addLeader(Leader $leader): self
    {
        if (!$this->leaders->contains($leader)) {
            $this->leaders->add($leader);
            $leader->setParti($this);
        }

        return $this;
    }

    public function removeLeader(Leader $leader): self
    {
        if ($this->leaders->removeElement($leader)) {
            // set the owning side to null (unless already changed)
            if ($leader->getParti() === $this) {
                $leader->setParti(null);
            }
        }

        return $this;
    }

    public function getName(): string
    {
        $partiNames = $this->getPartiNames();
        $partiName = null;
        if ($partiNames->count() > 0){
            $partiName = $partiNames->filter(function($el) {return $el->isMain();})->first() ?: $partiNames->last();
        }
        return $partiName ? $partiName->getName() : $this->acronym;
    }

    /**
     * @return Collection<int, PartiName>
     */
    public function getPartiNames(): Collection
    {
        return $this->partiNames;
    }

    public function addPartiName(PartiName $partiName): self
    {
        if (!$this->partiNames->contains($partiName)) {
            $this->partiNames->add($partiName);
            $partiName->setParti($this);
        }

        return $this;
    }

    public function removePartiName(PartiName $partiName): self
    {
        if ($this->partiNames->removeElement($partiName)) {
            // set the owning side to null (unless already changed)
            if ($partiName->getParti() === $this) {
                $partiName->setParti(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection<int, PartiHistory>
     */
    public function getPartiHistories(): Collection
    {
        return $this->partiHistories;
    }

    public function addPartiHistory(PartiHistory $partiHistory): self
    {
        if (!$this->partiHistories->contains($partiHistory)) {
            $this->partiHistories->add($partiHistory);
            $partiHistory->setParti($this);
        }

        return $this;
    }

    public function removePartiHistory(PartiHistory $partiHistory): self
    {
        if ($this->partiHistories->removeElement($partiHistory)) {
            // set the owning side to null (unless already changed)
            if ($partiHistory->getParti() === $this) {
                $partiHistory->setParti(null);
            }
        }

        return $this;
    }


    public function getLeaderName(): ?string
    {
        if ($this->leaders->isEmpty())
            return null;
        return $this->leaders?->last()?->getName();
    }

    public function getFederal(): ?int
    {
        return $this->federal;
    }

    public function setFederal(?int $federal): self
    {
        $this->federal = $federal;

        return $this;
    }

    public function getPlace(): ?int
    {
        return $this->place;
    }

    public function setPlace(int $place): self
    {
        $this->place = $place;

        return $this;
    }

    public function getTwitter(): ?string
    {
        return $this->twitter;
    }

    public function setTwitter(?string $twitter): self
    {
        $this->twitter = $twitter;

        return $this;
    }

    public function getFacebook(): ?string
    {
        return $this->facebook;
    }

    public function setFacebook(?string $facebook): self
    {
        $this->facebook = $facebook;

        return $this;
    }

    public function getInstagram(): ?string
    {
        return $this->instagram;
    }

    public function setInstagram(?string $instagram): self
    {
        $this->instagram = $instagram;

        return $this;
    }

    public function getWebsite(): ?string
    {
        return $this->website;
    }

    public function setWebsite(?string $website): self
    {
        $this->website = $website;

        return $this;
    }

    public function getAbout(): ?string
    {
        return $this->about;
    }

    public function setAbout(?string $about): self
    {
        $this->about = $about;

        return $this;
    }
}
