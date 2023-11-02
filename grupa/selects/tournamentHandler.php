<?php
include "db.php";
header("Access-Control-Allow-Origin: http://localhost:3000");
header('Content-Type: application/json');

class TournamentHandler extends Database {
    private $rawData;

    public function __construct() {
        parent::__construct();
        $this->rawData = file_get_contents('php://input');
    }

    public function tournamentData() {
        $decodedData = json_decode($this->rawData, true);

        $game = $decodedData['game'];
        $description = $decodedData['description'];
        $player_count = $decodedData['player_count'];
        $prize_pool = $decodedData['prize_pool'];
        $entry_fee = $decodedData['entry_fee'];
        $from_date = $decodedData['from_date'];
        $to_date = $decodedData['to_date'];
        $bg_image = $decodedData['bg_image'];

        $data = [
            'desc_err' => '',
            'pc_err' => '',
            'pp_err' => '',
            'ef_err' => '',
            'fd_err' => '',
            'td_err' => ''
        ];
        if (empty($description)) {
            $data['desc_err'] = "Please write a description!";
        }
        if (empty($player_count)) {
            $data['pc_err'] = "Please enter a player count!";
        }
        if (empty($prize_pool)) {
            $data['pp_err'] = "Please enter the tournament prize pool!";
        }
        if (empty($entry_fee)) {
            $data['ef_err'] = "Please enter entry fee!";
        }
        if (empty($from_date)) {
            $data['fd_err'] = "Please insert a date!";
        }
        if (empty($to_date)) {
            $data['td_err'] = "Please insert a date!";
        }
        if (strlen($description) > 100) {
            $data['desc_err'] = "Description is too long.";
        }
        if ($player_count < 0) {
            $data['pc_err'] = "Enter a valid Player Count!";
        }
        if ($prize_pool < 0) {
            $data['pp_err'] = "Enter a valid Prize Pool!";
        }
        if ($entry_fee < 0) {
            $data['ef_err'] = "Enter a valid Entry fee!";
        }
        if (empty($data['desc_err']) && empty($data['pc_err']) && empty($data['pp_err']) && empty($data['ef_err']) && empty($data['fd_err']) && empty($data['td_err'])) {
            $sql = "INSERT INTO `add_tournament` (`game`, `description`, `player_count`, `prize_pool`, `entry_fee`, `from_date`, `to_date`, `bg_image`) VALUES ('$game','$description','$player_count','$prize_pool','$entry_fee','$from_date','$to_date','$bg_image')";

            $result = $this->conn->query($sql);

            if ($result === true) {
                echo json_encode(["message" => "Successfully Registered.", 'status' => 200]);
            } else {
                echo json_encode(["message" => "Failed to Register.", 'status' => 403]);
            }
        } else {
            $data['status'] = 403;
            echo json_encode($data);
        }
    }
}

$tournamentHandler = new TournamentHandler();
$tournamentHandler->tournamentData();
?>
