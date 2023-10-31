<?php

//prendo la lista json, la trasformo in stringa e la salvo in una variabile.
$json_string = file_get_contents('todoList.json');

//trasformo la stringa in un array php e la salvo in una variabile.
$list = json_decode($json_string);



if (isset($_POST['taskItem'])) {
    //se taskItem esiste, creo un nuovo oggetto task da pushare dentro la lista, ovvero il mio array di oggetti php
    $newTask = [
        'task' => $_POST['taskItem'],
        'done' => "false"
    ];

    //pusho nella lista
    $list[] = $newTask;
    file_put_contents('todoList.json', json_encode($list));
}


if (isset($_POST['deleteItem'])) {
    $index = $_POST['deleteItem'];
    array_splice($list, $index, 1);
    file_put_contents('todoList.json', json_encode($list));
}



//trasformo il file php in json.
header('Content-Type: application/json');

//stampo la lista trasformata da array php a stringa.
echo json_encode($list);
