<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Weather App</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div id="app">
        <video id="background-video" autoplay loop muted></video>
        <div id="weather-info">
            <h1 id="location"></h1>
            <h2 id="country"></h2>
            <p id="temperature"></p>
            <p id="main"></p>
            <p id="description"></p>
            <form id="location-form">
                <input type="text" id="location-input" placeholder="Enter location">
                <button type="submit">Get Weather</button>
            </form>
        </div>
    </div>
    <script src="script.js"></script>
</body>
</html>