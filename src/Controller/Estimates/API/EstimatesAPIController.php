<?php

namespace App\Controller\Estimates\API;

use App\Entity\Estimate;
use App\Entity\Company;
use App\Entity\CompanyRequest;
use Doctrine\Persistence\ManagerRegistry as PersistenceManagerRegistry;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use App\Service\SendGridService;
use Symfony\Component\Mailer\MailerInterface;
use Symfony\Component\Mime\Email;

class EstimatesAPIController extends AbstractController
{
    #[Route('/api/createEstimate', name: 'create_estimate_api')]
    public function estimates(PersistenceManagerRegistry $doctrine, Request $request, MailerInterface $mailer)
    {
        $em = $doctrine->getManager();
        $userId = $this->getUser()->getId();
        $user = $em->getRepository('App\Entity\User')->findOneBy(['id' => $userId]);

        if (!$user) {
            return $this->json([
                'error' => 'User not found!',
            ]);
        }
        $company = $user->getCompany();
        $params = json_decode($request->getContent(), true);

        // If company exists
        if ($company) {
            $estimate = new Estimate();
            $estimate->setCompany($company);
            $estimate->setAddress($params['address']);
            $estimate->setArea($params['areaInt']);
            $estimate->setPerimeter($params['perimeterInt']);
            $estimate->setDateCreated(new \DateTime('now'));
            $estimate->setDateUpdated(new \DateTime('now'));
            $estimate->setCreator($user);

            $em->persist($estimate);
            $em->flush();
            $em->clear();

        } else {
            return $this->json([
                'error' => 'Company not found!',
            ]);
        }

        return $this->json([
            'success' => 'Created Estimate!',
        ]);
    }


    function isValidEmail($email) {
        if (filter_var($email, FILTER_VALIDATE_EMAIL)) {
            return true;
        } else {
            return false;
        }
    }

    #[Route('/api/estimate-save', name: 'save_estimate_api')]
    public function saveEstimates(PersistenceManagerRegistry $doctrine, Request $request)
    {
            $em = $doctrine->getManager();
            $userId = $this->getUser()->getId();
            $user = $em->getRepository('App\Entity\User')->findOneBy(['id' => $userId]);

            if (!$user) {
                return $this->json([
                    'error' => 'User not found!',
                ]);
            }
            $company = $user->getCompany();
            $params = json_decode($request->getContent(), true);

            // If company exists
            if ($company) {
                $estimate = $em->getRepository('App\Entity\Estimate')->findOneBy(['id' => $params['estimate_id']]);
                $estimate->setAddress($params['address']);
                $estimate->setDateUpdated(new \DateTime('now'));

                $estimate->setCustomerName($params['customer_name']);
                $material = $em->getRepository('App\Entity\Materials')->findOneBy(['id' => $params['estimate_material']]);
                $estimate->setMaterialChoice($material);

                if ($this->isValidEmail($params['customer_email'])) {
                    $estimate->setCustomerEmail($params['customer_email']);
                } else {
                    return $this->json(
                        ['error' => 'Invalid email!'],
                        400 // HTTP status code for Bad Request
                    );
                }

                $em->persist($estimate);
                $em->flush();
                $em->clear();

            } else {
                return $this->json(
                    ['error' => 'Company not found!'],
                    400 // HTTP status code for Bad Request
                );
            }

            return $this->json([
                'success' => 'Saved Estimate!',
            ]);
    }

    #[Route('/api/estimate-email', name: 'email_estimate_api')]
    public function emailEstimates(PersistenceManagerRegistry $doctrine, Request $request, SendGridService $sendGridService)
    {
        $em = $doctrine->getManager();
        $userId = $this->getUser()->getId();
        $user = $em->getRepository('App\Entity\User')->findOneBy(['id' => $userId]);

        if (!$user) {
            return $this->json([
                'error' => 'User not found!',
            ], 404); // Set appropriate HTTP status code for error
        }

        $params = json_decode($request->getContent(), true);

        // Decode PDF data from base64
        $pdfData = $params['pdf'];
        list(, $pdfBase64) = explode(',', $pdfData);
        $decodedPdf = base64_decode($pdfBase64);

        try {
            $sendGridService->sendEmail(
                $params['customer_email'],
                'Your RoofX Estimate',
                'Please find attached your RoofX Estimate.',
                [
                    [
                        'content' => $decodedPdf,
                        'filename' => 'estimate.pdf',
                        'type' => 'application/pdf',
                        'disposition' => 'attachment',
                    ]
                ]
            );

            return $this->json([
                'success' => 'Estimate sent successfully!',
            ]);
        } catch (\Exception $e) {
            return $this->json([
                'error' => 'Failed to send estimate: ' . $e->getMessage(),
            ], 500); // Internal Server Error
        }
    }



}












