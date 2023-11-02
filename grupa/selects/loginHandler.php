<?php
include "db.php";
header("Access-Control-Allow-Origin: http://localhost:3000");
header('Content-Type: application/json');

class DataHandler extends Database {
    private $rawData;

    public function __construct() {
        parent::__construct();
        $this->rawData = file_get_contents('php://input');
    }

    public function processData()
    {
        $decodedData = json_decode($this->rawData, true);

        $username = htmlspecialchars(trim($decodedData['username']));
        $password = htmlspecialchars(trim($decodedData['password']));
        $confPassword = $decodedData['confPassword'];

//        $task_title = htmlspecialchars(trim($_POST["task_title"]));

        $data = [
            'user_err' => '',
            'pass_err' => '',
            'confPass_err' => '',
            'status' => ''
        ];
        if (empty($username)) {
            $data['user_err'] = "Username field can't be empty";
        }
        if (empty($password)) {
            $data['pass_err'] = "Password field can't be empty";
        }
        if (empty($confPassword)) {
            $data['confPass_err'] = "Confirm field can't be empty";
        }
        if (strlen($username) > 30) {
            $data['user_err'] = "Username can't be more than 30 characters!";
        }
        if (strlen($password) > 30) {
            $data['pass_err'] = "Password can't be more than 30 characters!";
        }
        if($password !== $confPassword) {
            $data['confPass_err'] = "Password does not match!";
        }
        if (empty($data['user_err']) && empty($data['pass_err']) && empty($data['confPass_err'])) {
            $hashedPassword = password_hash($password, PASSWORD_DEFAULT);
            $sql = "INSERT INTO `login` (`username`, `password`) VALUES ('$username','$hashedPassword')";

            $result = $this->conn->query($sql);

            if ($result === true) {
                echo json_encode(["message" => "Successfully Registered.", 'status'=>200]);
            } else {
                echo json_encode(["message" => "Failed to Register.", 'status'=>403]);
            }
        } else {
            $data['status'] = 403;
            echo json_encode($data);
        }
    }
    public function loginUser($loginUsername, $loginPassword)
    {
            $sql = "SELECT * FROM `login` WHERE username = '$loginUsername'";
            $result = $this->conn->query($sql);

            if ($result && $result->num_rows === 1) {
                $row = $result->fetch_assoc();
                $hashedPassword = $row['password'];
                $username = $row['username'];
                $userId = $row['id'];

                if (password_verify($loginPassword, $hashedPassword)) {
                    echo json_encode([
                        "success" => "logged in successfully",
                        "userID" => $userId,
                        "userName" => $username,
                    ]);
                } else {
                    echo json_encode(["error" => 'Incorrect username and/or password']);
                }
            } else {
                echo json_encode(["error" => 'Incorrect username and/or password']);
            }

    }
}


$dataHandler = new DataHandler();

$dataHandler->processData();
?>