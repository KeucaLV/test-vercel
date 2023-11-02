<?php
require('loginHandler.php');

$api = new DataHandler();

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $json_data = file_get_contents("php://input");
    $data = json_decode($json_data);

    if ($data === null) {
        echo json_encode(["error" => "Invalid JSON data"]);
    } else {
        $user = $data->user;
        $pass = $data->pass;
        $api->loginUser($user, $pass);
    }
}

$this->conn->close();
?>