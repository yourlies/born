<?php
$header = 

$myfile = fopen('./dist/index.html', 'w');
$header = file_get_contents('./header.html') . "\r\n";
fwrite($myfile, $header);
fclose($myfile);