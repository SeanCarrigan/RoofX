<?php

namespace App\Repository;

use App\Entity\CompanyRequest;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<CompanyRequest>
 *
 * @method CompanyRequest|null find($id, $lockMode = null, $lockVersion = null)
 * @method CompanyRequest|null findOneBy(array $criteria, array $orderBy = null)
 * @method CompanyRequest[]    findAll()
 * @method CompanyRequest[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class CompanyRequestRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, CompanyRequest::class);
    }

//    /**
//     * @return CompanyRequest[] Returns an array of CompanyRequest objects
//     */
//    public function findByExampleField($value): array
//    {
//        return $this->createQueryBuilder('c')
//            ->andWhere('c.exampleField = :val')
//            ->setParameter('val', $value)
//            ->orderBy('c.id', 'ASC')
//            ->setMaxResults(10)
//            ->getQuery()
//            ->getResult()
//        ;
//    }

//    public function findOneBySomeField($value): ?CompanyRequest
//    {
//        return $this->createQueryBuilder('c')
//            ->andWhere('c.exampleField = :val')
//            ->setParameter('val', $value)
//            ->getQuery()
//            ->getOneOrNullResult()
//        ;
//    }
}
