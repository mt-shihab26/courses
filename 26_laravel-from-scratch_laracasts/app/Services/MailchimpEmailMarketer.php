<?php

namespace App\Services;

use App\Contracts\EmailMarketer;
use MailchimpMarketing\ApiClient as Mailchimp;

class MailchimpEmailMarketer implements EmailMarketer
{
    public function __construct(
        protected Mailchimp $mailchimp,
    )
    {
    }

    public function subscribeToNewsletter(string $email)
    {
        return $this->mailchimp->lists->addListMember(
            config("services.mailchimp.newsletter_list_id"),
            [
                "email_address" => $email,
                "status" => "subscribed",
            ]
        );
    }

    public static function build(): static
    {
        $mailchimp = new Mailchimp();

        $mailchimp->setConfig([
            'apiKey' => config("services.mailchimp.api_key"),
            'server' => config("services.mailchimp.server_prefix")
        ]);

        return new static($mailchimp);
    }
}
