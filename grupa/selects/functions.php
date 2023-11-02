<?php

include 'db.php';

class Functions extends Database{
    function select($sql){
        // $conn = $this->connection(); 

        $results = $this->conn->query($sql);
        if($results->num_rows > 0){
            return $results;
        } else {
            return False;
        }
    }

}

$obj = new Functions;


?>