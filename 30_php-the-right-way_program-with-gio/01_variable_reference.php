<?php

$x = 1;

$y = &$x;

$x = 3;

echo "X = {$x}\n";
echo "Y = {$y}\n";
