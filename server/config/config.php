<?php

// Set the custom php.ini file path
ini_set('php_ini', __DIR__.'\php.ini');
require(__DIR__.'\..\app\services\environment.php');

try {
    $env = loadEnv(__DIR__.'\..\..\.env');
    // $pdo = new PDO("pgsql:host=$host;port=$port;dbname=$dbname;user=$user;password=$password");
    $conn_string = "host={$env['HOST']} port={$env['PORT']} dbname={$env['DBNAME']} user={$env['USER']} password={$env['PASSWORD']}";
    pg_connect($conn_string);
    echo "Connected successfully";
    // Perform your database operations here...
} catch (Exception $e) {
    echo "Connection failed: " . $e->getMessage();
}
?>
