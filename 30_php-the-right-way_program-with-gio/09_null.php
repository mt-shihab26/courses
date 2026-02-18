<?php

$x = null;

echo $x."\n";
var_dump($x);
var_dump($x === null);
var_dump(is_null($x));

var_dump($y);

$z = 123;

var_dump($z);

unset($z);

var_dump($z);

var_dump((string) null);
var_dump((int) null);
var_dump((bool) null);
var_dump((array) null);
