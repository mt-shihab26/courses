<?php

class Database
{
    public $pdo;
    public function __construct($credentials, $username = "root", $password = "")
    {
        $dsn       = "mysql:" . http_build_query($credentials, "", ";");
        $this->pdo = new PDO($dsn, $username, $password, [
            PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
        ]);
    }
    public function query($sql, $params)
    {
        $statement = $this->pdo->prepare($sql);
        $statement->execute($params);
        return $statement;
    }
}