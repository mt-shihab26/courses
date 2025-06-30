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

    $books = [
        "Pride and Prejudice",
        "To Kill a Mockingbird",
        "1984",
        "The Great Gatsby",
        "Harry Potter and the Sorcerer's Stone"
    ];

    ?>
    <div>
        <h1>Recommended Books</h1>
        <ul>
            <?php foreach ($books as $book) {
                echo "<li>{$book}™</li>";
            } ?>
        </ul>
        <h2>Alternative syntax</h2>
        <ul>
            <?php foreach ($books as $book): ?>
                <li>
                    <?= $book ?>™
                </li>
            <?php endforeach; ?>
        </ul>
    </div>
</body>

</html>