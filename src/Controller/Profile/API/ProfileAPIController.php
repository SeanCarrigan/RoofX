<?php

namespace App\Controller\Profile\API;

use App\Entity\Company;
use App\Entity\CompanyRequest;
use Doctrine\Persistence\ManagerRegistry as PersistenceManagerRegistry;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;

class ProfileAPIController extends AbstractController
{
    #[Route('/api/profile', name: 'api_profile')]
    public function profile(Request $request, PersistenceManagerRegistry $doctrine)
    {
        $em = $doctrine->getManager();
        $user = $this->getUser();

        if (!$user) {
            return $this->json([
                'error' => 'User not found!',
            ]);
        }
        $params = json_decode($request->getContent(), true);

        if ($user->getEmail() == $params['email']) {
            $user->setEmail($params['email']);
        } else {
            if ($em->getRepository('App:User')->findOneBy(['email' => $params['email']])) {
                return $this->json([
                    'error' => 'Email already exists!',
                ]);
            }
        }

        $user->setFirstName($params['firstName']);
        $user->setLastName($params['lastName']);

        $em->persist($user);
        $em->flush();
        $em->clear();

        return $this->json([
            'success' => 'Success!',
        ]);
    }

    #[Route('/api/createCompany', name: 'api_create_company')]
    public function createCompany(Request $request, PersistenceManagerRegistry $doctrine)
    {
        $em = $doctrine->getManager();
        $user = $this->getUser();

        if (!$user) {
            return $this->json([
                'error' => 'User not found!',
            ]);
        }
        $owner = $em->getRepository('App\Entity\User')->findOneBy(['id' => $user->getId()]);

        $params = json_decode($request->getContent(), true);


        if ($em->getRepository('App\Entity\Company')->findOneBy(['email' => $params['companyEmail']])) {
            return $this->json([
                'error' => 'Company with this email already exists!',
            ]);
        }

        $company = new Company();
        $company->setName($params['companyName']);
        $company->setEmail($params['companyEmail']);
        $company->setOwner($owner);
        $company->setDateCreated(new \DateTime('now'));
        $company->setDateUpdated(new \DateTime('now'));
        $company->setActive(true);
        $company->setAddress($params['companyAddress']);
        $company->setCity($params['companyCity']);
        $company->setState($params['companyState']);
        $company->setZip($params['companyZip']);
        $company->setPhoneNumber($params['companyPhone']);
        $company->setMotto($params['companyMotto']);

        $company->setInviteCode(uniqid());

        $em->persist($company);
        $em->flush();

        $user->setCompany($company);
        $em->persist($user);
        $em->flush();
        $em->clear();

        return $this->json([
            'success' => 'Success!',
        ]);
    }

    #[Route('/api/joinCompany', name: 'api_join_company')]
    public function joinCompany(Request $request, PersistenceManagerRegistry $doctrine)
    {
        $em = $doctrine->getManager();
        $userId = $this->getUser()->getId();
        $user = $em->getRepository('App\Entity\User')->findOneBy(['id' => $userId]);

        if (!$user) {
            return $this->json([
                'error' => 'User not found!',
            ]);
        }
        $params = json_decode($request->getContent(), true);

        if (!$company = $em->getRepository('App\Entity\Company')->findOneBy(['inviteCode' => $params['companyCode']])) {
            return $this->json([
                'error' => 'No company code found!',
            ]);
        } else {
            $companyRequest = new CompanyRequest();
            $companyRequest->setFromUser($user);
            $companyRequest->setToUser($company->getOwner());
            $companyRequest->setStatus(CompanyRequest::$STATUS_PENDING);

            $em->persist($companyRequest);
            $em->flush();
            $em->clear();

            return $this->json([
                'success' => 'Success!',
            ]);
        }

    }

    #[Route('/api/editCompany', name: 'api_update_company')]
    public function editCompany(Request $request, PersistenceManagerRegistry $doctrine)
    {
        $em = $doctrine->getManager(); // Entity manager to create and updating objects
        $user = $this->getUser(); // Gets user that made request

        if (!$user) {
            return $this->json([
                'error' => 'User not found!',
            ]);
        }

        $params = json_decode($request->getContent(), true);

        $company = $em->getRepository('App\Entity\Company')->findOneBy(['id' => $params['companyId']]); //Finding the correct company
        if (!$company) { //Security
            return $this->json([
                'error' => 'Company not found!',
            ]);
        }

        if ($company->getOwner() != $user) { // Security
            return $this->json([
                'error' => 'You are not the owner of this company!',
            ]);
        }

        if ($em->getRepository('App\Entity\Company')->findOneBy(['email' => $params['companyEmail']])) {
            return $this->json([
                'error' => 'Company with this email already exists!',
            ]);
        }

        $company->setName($params['companyName']);
        $company->setEmail($params['companyEmail']);
        $company->setDateUpdated(new \DateTime('now'));
        $company->setAddress($params['companyAddress']);
        $company->setCity($params['companyCity']);
        $company->setState($params['companyState']);
        $company->setZip($params['companyZip']);
        $company->setPhoneNumber($params['companyPhone']);
        $company->setMotto($params['companyMotto']);

        $em->persist($company); // Persisting the changes
        $em->flush();  // Actually saves it in the database
        $em->clear(); // Clears for next request

        return $this->json([
            'success' => 'Success!',
        ]);
    }

    #[Route('/api/decideCompany', name: 'api_decide_company')]
    public function decideCompany(Request $request, PersistenceManagerRegistry $doctrine)
    {
        $em = $doctrine->getManager();
        $user = $this->getUser();

        if (!$user) {
            return $this->json([
                'error' => 'User not found!',
            ]);
        }

        $params = json_decode($request->getContent(), true);

        if ($params['status'] == 'accepted') {
            $acceptedUser = $em->getRepository('App\Entity\User')->findOneBy(['id' => $params['id']]);
            $company = $em->getRepository('App\Entity\Company')->findOneBy(['id' => $params['company']]);
            $acceptedUser->setCompany($company);
            $companyRequest = $em->getRepository('App\Entity\CompanyRequest')->findOneBy(['id' => $params['requestId']]);
            $companyRequest->setStatus(CompanyRequest::$STATUS_ACCEPTED);
            $em->persist($acceptedUser);
            $em->flush();
        } else {
            $companyRequest = $em->getRepository('App\Entity\CompanyRequest')->findOneBy(['id' => $params['requestId']]);
            $companyRequest->setStatus(CompanyRequest::$STATUS_REJECTED);
            $em->persist($companyRequest);
            $em->flush();
        }

        $em->clear();
        return $this->json([
            'success' => 'Success!',
        ]);

    }
}