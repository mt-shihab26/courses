<?php

namespace App\Contracts;

interface EmailMarketer
{
    function subscribeToNewsletter(string $email);
}
