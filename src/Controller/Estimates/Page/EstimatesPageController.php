<?php

namespace App\Controller\Estimates\Page;

use Doctrine\Persistence\ManagerRegistry as PersistenceManagerRegistry;
use Psr\Log\LoggerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\Response;

class EstimatesPageController extends AbstractController
{
    #[Route('/estimates', name: 'estimates_page')]
    public function estimates(PersistenceManagerRegistry $doctrine)
    {
        $user = $this->getUser();
        if ($user->getCompany() != null){
            $notifications = $doctrine->getRepository('App\Entity\CompanyRequest')->findBy(['toUser' => $user, 'status' => '0']);
        } else {
            $notifications = $doctrine->getRepository('App\Entity\CompanyRequest')->findBy(['fromUser' => $user, 'status' => '99']);
        }
        if ($user->getCompany() != null) {
            $company = $user->getCompany();
            $estimates = $doctrine->getRepository('App\Entity\Estimate')->findBy(['company' => $company]);
        } else {
            $estimates = [];
        }

        return $this->render('/pages/estimates/estimates.html.twig', [
            'notifications' => $notifications,
            'estimates' => $estimates,
        ]);
    }

    #[Route('/estimate/{id}', name: 'estimate_page')]
    public function estimate(PersistenceManagerRegistry $doctrine, $id)
    {
        $user = $this->getUser();


        $estimate = $doctrine->getRepository('App\Entity\Estimate')->findOneBy(['id' => $id]);
        $company = $estimate->getCompany();


        if (!$estimate) {
            throw $this->createNotFoundException('No estimate found for id ' . $id);
        }

        if ($user->getCompany() == null || $user->getCompany() != $estimate->getCompany()) {
            throw $this->createNotFoundException('No estimate found with company ' . $user->getCompany());
        }

        if ($user->getCompany() != null){
            $notifications = $doctrine->getRepository('App\Entity\CompanyRequest')->findBy(['toUser' => $user, 'status' => '0']);
        } else {
            $notifications = $doctrine->getRepository('App\Entity\CompanyRequest')->findBy(['fromUser' => $user, 'status' => '99']);
        }

        $materials = $doctrine->getRepository('App\Entity\Materials')->findAll();

        return $this->render('/pages/estimates/estimate.html.twig', [
            'estimate' => $estimate,
            'notifications' => $notifications,
            'company' => $company,
            'materials' => $materials,
        ]);

    }


}