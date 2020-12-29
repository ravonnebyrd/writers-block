<?php
$hn = 'localhost';
$db = 'writersblock';
$un = 'wb';
$pw = 'bw';

$connection = new mysqli($hn, $un, $pw, $db);
if($connection->connect_error) die("PHP cannot connect to MYSQL at this time");
?>
