<?php

namespace App\Controller\Map\Page;

use Doctrine\Persistence\ManagerRegistry as PersistenceManagerRegistry;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;

class MapPageController extends AbstractController
{
    #[Route('/map', name: 'map_page')]
    public function home(PersistenceManagerRegistry $doctrine)
    {
        $user = $this->getUser();
        if ($user->getCompany() == null){
            return $this->redirectToRoute('profile_page');
        }

        return $this->render('/pages/map/map.html.twig', [
        ]);
    }

}