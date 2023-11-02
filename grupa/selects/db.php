<?php

class Database {

    protected $host;
    protected $user;
    protected $pass;
    protected $dbname;
    protected $conn;

    function __construct(){
        $this->host = "localhost";
        $this->user = "root";
        $this->pass = "";
        $this->dbname = "gamezon";
        $this->conn = new mysqli($this->host, $this->user, $this->pass, $this->dbname);
    }

}


?>