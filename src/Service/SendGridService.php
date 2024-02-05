<?php

namespace App\Service;

use SendGrid;
use Symfony\Bridge\Twig\Mime\TemplatedEmail;
use Symfony\Component\Mime\Address;
use Twig\Environment as TwigEnvironment;



class SendGridService
{
    private $client;
    private $twig;

    public function __construct(string $apiKey, TwigEnvironment $twig)
    {
        $this->client = new SendGrid($apiKey);
        $this->twig = $twig;
    }

    public function sendEmail($to, $subject, $body, $attachments = [])
    {
        $email = new \SendGrid\Mail\Mail();
        $email->setFrom("projectroofx@gmail.com", "Roofx");
        $email->setSubject($subject);
        $email->addTo($to);
        $email->addContent("text/plain", $body);

        foreach ($attachments as $attachment) {
            $email->addAttachment(
                $attachment['content'],
                $attachment['type'],
                $attachment['filename'],
                $attachment['disposition']
            );
        }

        try {
            return $this->client->send($email);
        } catch (\Exception $e) {
            // Handle exception
        }

        return null;
    }

    public function sendEmailPass($to, $subject, $fromEmail, $fromName, $template, $context)
    {
        // Render the template
        $content = $this->twig->render($template, $context);

        // Create the email
        $email = new \SendGrid\Mail\Mail();
        $email->setFrom($fromEmail, $fromName);
        $email->setSubject($subject);
        $email->addTo($to);
        $email->addContent("text/html", $content);

        try {
            return $this->client->send($email);
        } catch (\Exception $e) {
            // Handle exception
        }

        return null;
    }


}