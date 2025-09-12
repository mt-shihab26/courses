<?php

namespace App\Helpers;

use Exception;
use Illuminate\Support\Carbon;

class DateHelper
{
    public static function countDaysToNow($date): int
    {
        try {
            // Get the current date as a Carbon instance
            $currentDateTime = Carbon::now();

            // Convert the given date and time to a Carbon instance
            $carbonGivenDateTime = Carbon::createFromFormat('Y-m-d H:i:s', $date);

            // Calculate the difference in days between the current date and the given date
            $daysDifference = $currentDateTime->diffInDays($carbonGivenDateTime);

            // Return the number of days difference
            return $daysDifference;
        } catch (Exception) {
            return 10;
        }
    }
}
