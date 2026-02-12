<?php

echo 13.5."\n";
echo 1.1e3."\n";
echo 1.1e-3."\n";
var_dump(13.5);
echo 13_123.123."\n";

echo PHP_FLOAT_MIN."\n";
echo PHP_FLOAT_MAX."\n";
echo PHP_FLOAT_DIG."\n";
echo PHP_FLOAT_EPSILON."\n";

echo floor((0.1 + 0.7) * 10)."\n";
echo ceil((0.1 + 0.7) * 10)."\n";

echo log(-1).' '.NAN."\n";
echo (PHP_FLOAT_MAX * 2).' '.INF."\n";

echo is_nan(log(-1))."\n";
echo is_infinite(PHP_FLOAT_MAX * 2)."\n";
echo is_finite(PHP_FLOAT_MAX * 2)."\n";
echo ((float) 10)."\n";
echo floatval(10)."\n";
