<?php

echo PHP_INT_MIN."\n";
echo PHP_INT_MAX."\n";
echo PHP_INT_SIZE."\n";

echo (string) 0b11 ."\n"; // binary
echo (string) 11 ."\n"; // decimal
echo (string) 011 ."\n"; // octal
echo (string) 0x11 ."\n"; // hex-decimal

var_dump(PHP_INT_MAX + 1);

/* var_dump((integer) PHP_INT_MAX + 1); */
var_dump((int) PHP_INT_MAX + 1);

echo (int) true."\n";
echo (int) false."\n";
echo (int) 5.98."\n";
echo (int) '5.98'."\n";
echo (int) '87abcd'."\n";
echo (int) 'abcd'."\n";
echo (int) null."\n";

$age = 23;

var_dump(is_int($age));
/* var_dump(is_integer($age)); */

echo 200_000 ."\n";
