<?php

define('PI', 3.1416);

echo PI."\n";

const PI2 = 3.1416;

echo PI2."\n";

if (true) {
    // const PI3 = 3.1416; # error

    // echo PI3."\n";

    define('PI4', 3.1416);

    echo PI4."\n";
}

echo 'PHP version: '.PHP_VERSION."\n";
