<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Demo</title>
    <style>
        body {
            display: grid;
            place-items: center;
            height: 100vh;
            margin: 0;
            font-family: sans-serif;
        }
    </style>
</head>

<body>
    <?php

    $name    = "Dark Matter";
    $is_read = false;

    if ($is_read) {
        $message = "You have read $name";
    } else {
        $message = "You have NOT read $name";
    }

    ?>

    <h1>
        <?= $message ?>
    </h1>
</body>

</html>