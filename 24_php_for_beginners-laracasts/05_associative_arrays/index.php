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
        [
            "name" => "Pride and Prejudice",
            "author" => "Jane Austen",
            "purchaseUrl" => "http://example.com"
        ],
        [
            "name" => "To Kill a Mockingbird",
            "author" => "Harper Lee",
            "purchaseUrl" => "http://example.com"
        ],
        [
            "name" => "1984",
            "author" => "George Orwell",
            "purchaseUrl" => "http://example.com"
        ],
        [
            "name" => "The Great Gatsby",
            "author" => "F. Scott Fitzgerald",
            "purchaseUrl" => "http://example.com"
        ],
        [
            "name" => "Harry Potter and the Sorcerer's Stone",
            "author" => "J.K. Rowling",
            "purchaseUrl" => "http://example.com"
        ],
    ];

    ?>
    <div>
        <h1>Recommended Books</h1>
        <ul>
            <?php foreach ($books as $book): ?>
                <li>
                    <a href="<?= $book["purchaseUrl"] ?>">
                        <?= $book["name"] ?>™
                    </a>
                </li>
            <?php endforeach; ?>
        </ul>
    </div>
</body>

</html>