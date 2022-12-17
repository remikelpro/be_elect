<?php
namespace App\Trait;

trait SlugRepositoryTrait {
    public function findOneBySlug($slug)
    {
        $qb = $this->createQueryBuilder('n')
            ->select('n, t')
            ->join('n.translations', 't')
            ->where('t.slug = :slug')
            ->setParameter('slug', $slug);

        return $qb->getQuery()->getSingleResult();
    }
}