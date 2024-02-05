<?php

namespace App\Entity;

use App\Repository\UserRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Bridge\Doctrine\Validator\Constraints\UniqueEntity;
use Symfony\Component\Security\Core\User\PasswordAuthenticatedUserInterface;
use Symfony\Component\Security\Core\User\UserInterface;

#[ORM\Entity(repositoryClass: UserRepository::class)]
#[UniqueEntity(fields: ['email'], message: 'There is already an account with this email')]
class User implements UserInterface, PasswordAuthenticatedUserInterface
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 180, unique: true)]
    private ?string $email = null;

    #[ORM\Column]
    private array $roles = [];

    /**
     * @var string The hashed password
     */
    #[ORM\Column]
    private ?string $password = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $firstName = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $lastName = null;

    #[ORM\ManyToOne(inversedBy: 'users')]
    private ?Company $company = null;

    #[ORM\Column(type: Types::DATETIME_MUTABLE, nullable: true)]
    private ?\DateTimeInterface $dateCreated = null;

    #[ORM\Column(type: Types::DATETIME_MUTABLE, nullable: true)]
    private ?\DateTimeInterface $dateUpdated = null;

    #[ORM\OneToMany(mappedBy: 'creator', targetEntity: Estimate::class)]
    private Collection $estimates;

    public function __construct()
    {
        $this->estimates = new ArrayCollection();
    }

    #[ORM\Column(type: 'boolean')]
    //private $isVerified = false;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getEmail(): ?string
    {
        return $this->email;
    }

    public function setEmail(string $email): static
    {
        $this->email = $email;

        return $this;
    }

    /**
     * A visual identifier that represents this user.
     *
     * @see UserInterface
     */
    public function getUserIdentifier(): string
    {
        return (string) $this->email;
    }

    /**
     * @see UserInterface
     */
    public function getRoles(): array
    {
        $roles = $this->roles;
        // guarantee every user at least has ROLE_USER
        $roles[] = 'ROLE_USER';

        return array_unique($roles);
    }

    public function setRoles(array $roles): static
    {
        $this->roles = $roles;

        return $this;
    }

    /**
     * @see PasswordAuthenticatedUserInterface
     */
    public function getPassword(): string
    {
        return $this->password;
    }

    public function setPassword(string $password): static
    {
        $this->password = $password;

        return $this;
    }

    /**
     * @see UserInterface
     */
    public function eraseCredentials(): void
    {
        // If you store any temporary, sensitive data on the user, clear it here
        // $this->plainPassword = null;
    }

    public function getFirstName(): ?string
    {
        return $this->firstName;
    }

    public function setFirstName(?string $firstName): static
    {
        $this->firstName = $firstName;

        return $this;
    }

    public function getLastName(): ?string
    {
        return $this->lastName;
    }

    public function setLastName(?string $lastName): static
    {
        $this->lastName = $lastName;

        return $this;
    }

    public function getFullName(): ?string
    {
        return  $this->firstName." ".$this->lastName;
    }

//    public function isVerified(): bool
//    {
//        return $this->isVerified;
//    }
//
//    public function setIsVerified(bool $isVerified): static
//    {
//        $this->isVerified = $isVerified;
//
//        return $this;
//    }

public function getCompany(): ?Company
{
    return $this->company;
}

public function setCompany(?Company $company): static
{
    $this->company = $company;

    return $this;
}

public function getDateCreated(): ?\DateTimeInterface
{
    return $this->dateCreated;
}

public function setDateCreated(?\DateTimeInterface $dateCreated): static
{
    $this->dateCreated = $dateCreated;

    return $this;
}

public function getDateUpdated(): ?\DateTimeInterface
{
    return $this->dateUpdated;
}

public function setDateUpdated(?\DateTimeInterface $dateUpdated): static
{
    $this->dateUpdated = $dateUpdated;

    return $this;
}

/**
 * @return Collection<int, Estimate>
 */
public function getEstimates(): Collection
{
    return $this->estimates;
}

public function addEstimate(Estimate $estimate): static
{
    if (!$this->estimates->contains($estimate)) {
        $this->estimates->add($estimate);
        $estimate->setCreator($this);
    }

    return $this;
}

public function removeEstimate(Estimate $estimate): static
{
    if ($this->estimates->removeElement($estimate)) {
        // set the owning side to null (unless already changed)
        if ($estimate->getCreator() === $this) {
            $estimate->setCreator(null);
        }
    }

    return $this;
}
}
