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
            "purchaseUrl" => "http://example.com",
            "releaseYear" => 1813
        ],
        [
            "name" => "Sense and Sensibility",
            "author" => "Jane Austen",
            "purchaseUrl" => "http://example.com",
            "releaseYear" => 1811
        ],
        [
            "name" => "To Kill a Mockingbird",
            "author" => "Harper Lee",
            "purchaseUrl" => "http://example.com",
            "releaseYear" => 1960,
        ],
        [
            "name" => "1984",
            "author" => "George Orwell",
            "purchaseUrl" => "http://example.com",
            "releaseYear" => 1949
        ],
        [
            "name" => "The Great Gatsby",
            "author" => "F. Scott Fitzgerald",
            "purchaseUrl" => "http://example.com",
            "releaseYear" => 1925
        ],
        [
            "name" => "Harry Potter and the Sorcerer's Stone",
            "author" => "J.K. Rowling",
            "purchaseUrl" => "http://example.com",
            "releaseYear" => 1997
        ],
    ];

    function filterByAuthor($books, $author)
    {
        $filteredBooks = [];

        foreach ($books as $book) {
            if ($book["author"] === $author) {
                $filteredBooks[] = $book;
            }
        }

        return $filteredBooks;
    }

    ?>
    <div>
        <h1>Recommended Books</h1>
        <ul>
            <?php foreach (filterByAuthor($books, "Jane Austen") as $book): ?>
                <li>
                    <a href="<?= $book["purchaseUrl"] ?>">
                        <?= $book["name"] ?>™ (<?= $book["releaseYear"] ?>) - By <?= $book["author"] ?>
                    </a>
                </li>
            <?php endforeach; ?>
        </ul>
    </div>
</body>

</html>