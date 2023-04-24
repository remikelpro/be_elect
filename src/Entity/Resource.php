<?php

namespace App\Entity;

use App\Repository\ResourceRepository;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;


#[ORM\Entity(repositoryClass: ResourceRepository::class)]
#[ORM\HasLifecycleCallbacks]
class Resource extends AbstractTranslation
{
    public static array $resourceType = [
        "Status" => 0,
        "Program" => 1
    ];

    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $file = null;

    #[ORM\Column(type: Types::DATE_MUTABLE, nullable: true)]
    private ?\DateTimeInterface $date = null;

    #[ORM\ManyToOne(inversedBy: 'resources')]
    private ?Parti $idParti = null;

    #[ORM\ManyToOne(inversedBy: 'resources')]
    private ?Election $idElection = null;

    #[ORM\Column(type: Types::SMALLINT, nullable: true)]
    private ?int $type = null;

    #[ORM\Column]
    private ?\DateTimeImmutable $createdAt = null;

    #[ORM\Column]
    private ?\DateTimeImmutable $updatedAt = null;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getFile(): ?string
    {
        return $this->file;
    }

    public function setFile(?string $file): self
    {
        $this->file = $file;

        return $this;
    }

    public function getDate(): ?\DateTimeInterface
    {
        return $this->date;
    }

    public function setDate(?\DateTimeInterface $date): self
    {
        $this->date = $date;

        return $this;
    }

    public function getIdParti(): ?Parti
    {
        return $this->idParti;
    }

    public function setIdParti(?Parti $idParti): self
    {
        $this->idParti = $idParti;

        return $this;
    }

    public function getIdElection(): ?Election
    {
        return $this->idElection;
    }

    public function setIdElection(?Election $idElection): self
    {
        $this->idElection = $idElection;

        return $this;
    }

    public function getType(): ?int
    {
        return $this->type;
    }

    public function setType(?int $type): self
    {
        $this->type = $type;

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
}
