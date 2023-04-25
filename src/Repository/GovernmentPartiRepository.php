<?php

namespace App\Repository;

use App\Entity\GovernmentParti;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<GovernmentParti>
 *
 * @method GovernmentParti|null find($id, $lockMode = null, $lockVersion = null)
 * @method GovernmentParti|null findOneBy(array $criteria, array $orderBy = null)
 * @method GovernmentParti[]    findAll()
 * @method GovernmentParti[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class GovernmentPartiRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, GovernmentParti::class);
    }

    public function save(GovernmentParti $entity, bool $flush = false): void
    {
        $this->getEntityManager()->persist($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

    public function remove(GovernmentParti $entity, bool $flush = false): void
    {
        $this->getEntityManager()->remove($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

//    /**
//     * @return GovernmentParti[] Returns an array of GovernmentParti objects
//     */
//    public function findByExampleField($value): array
//    {
//        return $this->createQueryBuilder('g')
//            ->andWhere('g.exampleField = :val')
//            ->setParameter('val', $value)
//            ->orderBy('g.id', 'ASC')
//            ->setMaxResults(10)
//            ->getQuery()
//            ->getResult()
//        ;
//    }

//    public function findOneBySomeField($value): ?GovernmentParti
//    {
//        return $this->createQueryBuilder('g')
//            ->andWhere('g.exampleField = :val')
//            ->setParameter('val', $value)
//            ->getQuery()
//            ->getOneOrNullResult()
//        ;
//    }
}
