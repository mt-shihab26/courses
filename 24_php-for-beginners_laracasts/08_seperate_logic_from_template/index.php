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

function filter($items, $key, $value)
{
    $filteredItems = [];

    foreach ($items as $item) {
        if ($item[$key] === $value) {
            $filteredItems[] = $item;
        }
    }

    return $filteredItems;
}

$filteredBooks = filter($books, "releaseYear", 1960);

function filter2($items, $fn)
{
    $filteredItems = [];

    foreach ($items as $item) {
        if ($fn($item)) {
            $filteredItems[] = $item;
        }
    }

    return $filteredItems;
}

$filteredBooks = filter2($books, function ($item) {
    return $item["releaseYear"] <= 1949;
});

$filteredBooks = array_filter($books, function ($item) {
    return $item["releaseYear"] <= 1949;
});

require "index.view.php";