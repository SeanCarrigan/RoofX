<?php

namespace App\Controller\Profile\Page;

use Doctrine\Persistence\ManagerRegistry as PersistenceManagerRegistry;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;

class ProfilePageController extends AbstractController
{
    #[Route('/profile', name: 'profile_page')]
    public function profile(PersistenceManagerRegistry $doctrine)
    {
        $user = $this->getUser();
        $company = $user->getCompany();
        if (!$company) {
            $company = null;
        }
        return $this->render('/pages/profile/profile.html.twig',[
            'company' => $company,
        ]);
    }

}