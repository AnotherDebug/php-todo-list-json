<?php

//prendo la lista json, la trasformo in stringa e la salvo in una variabile.
$json_string = file_get_contents('todoList.json');

//trasformo la stringa in un array php e la salvo in una variabile.
$list = json_decode($json_string);








//trasformo l'array php in stringa.
header('Content-Type: application=json');

//stampo la lista trasformata da array php a stringa.
echo json_encode($list);