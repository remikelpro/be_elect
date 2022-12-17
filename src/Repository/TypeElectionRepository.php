<?php

namespace App\Repository;

use App\Entity\TypeElection;
use App\Trait\SlugRepositoryTrait;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<TypeElection>
 *
 * @method TypeElection|null find($id, $lockMode = null, $lockVersion = null)
 * @method TypeElection|null findOneBy(array $criteria, array $orderBy = null)
 * @method TypeElection[]    findAll()
 * @method TypeElection[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class TypeElectionRepository extends ServiceEntityRepository
{
    use SlugRepositoryTrait;
    
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, TypeElection::class);
    }

    public function save(TypeElection $entity, bool $flush = false): void
    {
        $this->getEntityManager()->persist($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

    public function remove(TypeElection $entity, bool $flush = false): void
    {
        $this->getEntityManager()->remove($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

//    /**
//     * @return TypeElection[] Returns an array of TypeElection objects
//     */
//    public function findByExampleField($value): array
//    {
//        return $this->createQueryBuilder('t')
//            ->andWhere('t.exampleField = :val')
//            ->setParameter('val', $value)
//            ->orderBy('t.id', 'ASC')
//            ->setMaxResults(10)
//            ->getQuery()
//            ->getResult()
//        ;
//    }

//    public function findOneBySomeField($value): ?TypeElection
//    {
//        return $this->createQueryBuilder('t')
//            ->andWhere('t.exampleField = :val')
//            ->setParameter('val', $value)
//            ->getQuery()
//            ->getOneOrNullResult()
//        ;
//    }
}
