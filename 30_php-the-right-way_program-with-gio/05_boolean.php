<?php

$completed = false;
/* $completed = FALSE; */ // all the same
/* $completed = False; */ // all the same
/* $completed = FaLse; */ // all the same

$completed = true;

echo $completed."\n";

var_dump(0 == false, -0 == false); // false
var_dump(0.0 == false, -0.0 == false); // false
var_dump('' == false); // false
var_dump([] == false); // false
var_dump(null == false); // false

var_dump(is_bool($completed));
