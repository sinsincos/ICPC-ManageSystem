<?php
//增加代码，在config.ini中读取相关信息。

$db = new mysqli('localhost',
    'ManageSystem', 'tN*#Kt*%Ny8DtKkR*9#;Zg5PF]wGNnUN',
    'ManageSystem', '3306');

if ($db->connect_error) die("数据库连接失败: \n" . $db->connect_error);
$db->query("set names utf8");