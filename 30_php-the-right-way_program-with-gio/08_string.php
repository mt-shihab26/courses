<?php

$hello = 'Hello Worlx';

echo $hello[-1]."\n";

$hello[-1] = 'd';

echo $hello."\n";

// Nowdoc
$text = <<<'TEXT'
Line 1
Line 2
Line 3
TEXT;

echo $text."\n";

// Heredoc
$html = <<<HTML
<div>{$hello}</div>
HTML;

echo $html."\n";
