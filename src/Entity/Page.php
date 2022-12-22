<?php

namespace App\Entity;

use App\Repository\PageRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use Knp\DoctrineBehaviors\Contract\Entity\TranslationInterface;
use Knp\DoctrineBehaviors\Contract\Entity\TranslatableInterface;
use Knp\DoctrineBehaviors\Model\Translatable\TranslatableTrait;

#[ORM\Entity(repositoryClass: PageRepository::class)]
#[ORM\HasLifecycleCallbacks]
class Page implements TranslatableInterface
{
    use TranslatableTrait;
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(nullable: true)]
    private ?int $position = null;

    #[ORM\ManyToOne(targetEntity: self::class, inversedBy: 'pages')]
    private ?self $idParent = null;

    #[ORM\OneToMany(mappedBy: 'idParent', targetEntity: self::class)]
    private Collection $pages;

    #[ORM\Column]
    private ?\DateTimeImmutable $createdAt = null;

    #[ORM\Column]
    private ?\DateTimeImmutable $updatedAt = null;

    #[ORM\Column(nullable: true)]
    private ?bool $showInMenu = null;

    public function __construct()
    {
        $this->pages = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getPosition(): ?int
    {
        return $this->position;
    }

    public function setPosition(?int $position): self
    {
        $this->position = $position;

        return $this;
    }

    public function getIdParent(): ?self
    {
        return $this->idParent;
    }

    public function setIdParent(?self $idParent): self
    {
        $this->idParent = $idParent;

        return $this;
    }

    /**
     * @return Collection<int, self>
     */
    public function getPages(): Collection
    {
        return $this->pages;
    }

    public function addPages(self $pages): self
    {
        if (!$this->pages->contains($pages)) {
            $this->pages->add($pages);
            $pages->setIdParent($this);
        }

        return $this;
    }

    public function removePages(self $pages): self
    {
        if ($this->pages->removeElement($pages)) {
            // set the owning side to null (unless already changed)
            if ($pages->getIdParent() === $this) {
                $pages->setIdParent(null);
            }
        }

        return $this;
    }

    public function getCreatedAt(): ?\DateTimeImmutable
    {
        return $this->createdAt;
    }

    public function setCreatedAt(\DateTimeImmutable $createdAt): self
    {
        $this->createdAt = $createdAt;

        return $this;
    }

    public function getUpdatedAt(): ?\DateTimeImmutable
    {
        return $this->updatedAt;
    }

    public function setUpdatedAt(\DateTimeImmutable $updatedAt): self
    {
        $this->updatedAt = $updatedAt;

        return $this;
    }

    #[ORM\PrePersist]
    public function setCreatedAtValue(): void
    {
        $this->updatedAt = new \DateTimeImmutable();
        $this->createdAt = new \DateTimeImmutable();
    }


    #[ORM\PreUpdate]
    public function setUpdatedAtAutomatically()
    {
        $this->updatedAt = new \DateTimeImmutable();
    }
    
    public function __call($method, $arguments)
    {
        return $this->proxyCurrentLocaleTranslation($method, $arguments);
    }    
    
    public function __get($method)
    {
        $arguments=[];
        return $this->proxyCurrentLocaleTranslation($method, $arguments);
    }
    public function __toString()
    {
        $arguments=[];
        return $this->proxyCurrentLocaleTranslation('__toString');
    }

    public function isShowInMenu(): ?bool
    {
        return $this->showInMenu;
    }

    public function setShowInMenu(?bool $showInMenu): self
    {
        $this->showInMenu = $showInMenu;

        return $this;
    }
}
