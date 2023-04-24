<?php

namespace App\Entity;

use App\Repository\CommuneRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Serializer\Annotation\Groups;
use ApiPlatform\Metadata\Get;
use ApiPlatform\Metadata\GetCollection;
use ApiPlatform\Doctrine\Orm\Filter\SearchFilter;
use ApiPlatform\Metadata\ApiFilter;
use ApiPlatform\Metadata\ApiResource;

#[ORM\Entity(repositoryClass: CommuneRepository::class)]
#[ApiResource(normalizationContext: ['groups' => ['read']], operations: [
    new Get(),
    new GetCollection()
])]
#[ApiFilter(SearchFilter::class, properties: [
    'name' => 'partial',
])]
class Commune extends AbstractTranslation
{

    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    #[Groups(['read'])]
    private ?int $id = null;

    #[Groups(['read'])]
    private ?string $name = null;

    #[ORM\ManyToOne(inversedBy: 'communes')]
    #[ORM\JoinColumn(nullable: false)]
    private ?Canton $idCanton = null;

    #[ORM\OneToMany(mappedBy: 'idCommune', targetEntity: Resultat::class)]
    private Collection $resultats;

    public function __construct()
    {
        $this->resultats = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
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
            $resultat->setIdCommune($this);
        }

        return $this;
    }

    public function removeResultat(Resultat $resultat): self
    {
        if ($this->resultats->removeElement($resultat)) {
            // set the owning side to null (unless already changed)
            if ($resultat->getIdCommune() === $this) {
                $resultat->setIdCommune(null);
            }
        }

        return $this;
    }
    
    public function __toString()
    {
        return $this->getName();
    }
}
