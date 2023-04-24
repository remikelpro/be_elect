<?php

namespace App\Entity;

use ApiPlatform\Doctrine\Orm\Filter\SearchFilter;
use ApiPlatform\Metadata\ApiFilter;
use ApiPlatform\Metadata\ApiResource;
use App\Repository\PartiRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
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
    'name' => 'partial',
])]
class Parti extends AbstractTranslation implements JsonSerializable
{

    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    #[Groups(['read'])]
    private ?int $id = null;

    #[ORM\Column(length: 255)]
    #[Groups(['read'])]
    private ?string $name = null;

    #[ORM\Column(length: 255, nullable: true)]
    #[Groups(['read'])]
    private ?string $logo = null;

    #[ORM\Column(length: 255, nullable: true)]
    #[Groups(['read'])]
    private ?string $color = null;

    #[ORM\Column(length: 255, nullable: true)]
    #[Groups(['read'])]
    private ?string $color_bg = null;

    #[ORM\Column(length: 255, nullable: true)]
    #[Groups(['read'])]
    private ?string $president = null;

    #[Groups(['read'])]
    private ?string $description = null;

    #[ORM\OneToMany(mappedBy: 'idParty', targetEntity: Resultat::class)]
    private Collection $resultats;

    #[ORM\Column(length: 255)]
    private ?string $slug = null;

    #[ORM\Column]
    private ?bool $main = false;

    #[ORM\OneToMany(mappedBy: 'idParti', targetEntity: Resource::class)]
    private Collection $resources;

    public function __construct()
    {
        $this->resultats = new ArrayCollection();
        $this->resources = new ArrayCollection();
    }

    public function __toString()
    {
        return $this->name;
    }

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

    public function getPresident(): ?string
    {
        return $this->president;
    }

    public function setPresident(?string $president): self
    {
        $this->president = $president;

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
            'name' => $this->name,
            'text' => $this->name,
            'slug'=> $this->slug,
        );
    }

    public function isMain(): ?bool
    {
        return $this->main;
    }

    public function setMain(bool $main): self
    {
        $this->main = $main;

        return $this;
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
}
