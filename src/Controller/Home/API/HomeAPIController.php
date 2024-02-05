<?php

namespace App\Controller\Home\API;

use Doctrine\Persistence\ManagerRegistry as PersistenceManagerRegistry;
use Symfony\Component\HttpFoundation\Request; // <-- This is the correct import
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class HomeAPIController extends AbstractController
{
    #[Route('/api/home', name: 'api_home')]
    public function home(Request $request, PersistenceManagerRegistry $doctrine)
    {
        $params = json_decode($request->getContent(), true);
        $name = $params['name'];

        $em = $doctrine->getManager();
        $user = $this->getUser();
        $user->setFirstName($name);

        $em->persist($user);
        $em->flush();
        $em->clear();

        return $this->json([
            'success' => 'Success!',
        ]);
    }
}
