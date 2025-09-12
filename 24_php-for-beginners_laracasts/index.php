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

        a {
            color: #268bd2;
            text-decoration: none;
        }

        a:hover {
            color: #2aa198;
        }

        a:active {
            color: #cb4b16;
        }
    </style>
</head>

<body>
    <h1>
        <?php
        $directory = "./"; // Set the directory path
        $folders   = array_filter(glob($directory . '*'), 'is_dir'); // Get all folders in the directory
        
        // Iterate through the folders and display them as links
        foreach ($folders as $folder) {
            echo "<a href='$folder'>$folder</a><br>"; // Display the folder name as a link
        }
        ?>
    </h1>
</body>

</html>