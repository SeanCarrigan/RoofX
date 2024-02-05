<?php

namespace App\Controller\Home\Page;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use Doctrine\Bundle\DoctrineBundle\Registry;
use Doctrine\Persistence\ManagerRegistry as PersistenceManagerRegistry;

class HomePageController extends AbstractController
{
    private function setupArray(): array
    {
        return array(
            'labels' => array(),
            'datasets' => array(
                array(
                    'data' => array()
                )
            )
        );
    }


    #[Route('/', name: 'home_page')]
    public function home(PersistenceManagerRegistry $doctrine)
    {
        $user = $this->getUser();
        $company = $user->getCompany();
        if ($user->getCompany() != null) {
            $notifications = $doctrine->getRepository('App\Entity\CompanyRequest')->findBy(['toUser' => $user, 'status' => '0']);
        } else {
            $notifications = $doctrine->getRepository('App\Entity\CompanyRequest')->findBy(['fromUser' => $user, 'status' => '99']);
        }

        $estimatesOvertime = $this->setupArray();
        $pricesOfMaterials = $this->setupArray();

        $dateObjects = array();
        for ($i = 6; $i >= 0; $i--) {
            $date = new \DateTime();
            $date->modify("-$i days");
            $dateObjects[] = $date;
            $estimatesOvertime['labels'][] = $date->format('l');
        }

        $estimatesData = [];
        foreach ($dateObjects as $dateObject) {
            $startOfDay = clone $dateObject;
            $startOfDay->setTime(0, 0, 0);

            $endOfDay = clone $dateObject;
            $endOfDay->setTime(23, 59, 59);

            $dailyEstimates = $doctrine->getRepository('App\Entity\Estimate')->findEstimatesByCompanyDate($company, $startOfDay, $endOfDay);

            $estimatesData[] = count($dailyEstimates);
        }
        $estimatesOvertime['datasets'][0]['data'] = $estimatesData;

        $materials = $doctrine->getRepository('App\Entity\Materials')->findAll();
        foreach ($materials as $material) {
            $pricesOfMaterials['labels'][] = $material->getName();
            $pricesOfMaterials['datasets'][0]['data'][] = $material->getMarketPrice();
        }

        return $this->render('/pages/home/home.html.twig', [
            'notifications' => $notifications,
            'estimatesOvertime' => $estimatesOvertime,
            'pricesOfMaterials' => $pricesOfMaterials,
        ]);
    }

    #[Route('/about', name: 'about_page')]
    public function about()
    {
        return $this->render('/pages/home/about.html.twig', [

        ]);
    }

}