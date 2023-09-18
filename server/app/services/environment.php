<?php
    function loadEnv($path){
        $lines= file($path, FILE_IGNORE_NEW_LINES | FILE_SKIP_EMPTY_LINES);
        $env = [];

        foreach ($lines as $line) {
            list($key, $value) = explode('=', $line, 2);
            $env[$key] = $value;
        }

        return $env;
    }

?>