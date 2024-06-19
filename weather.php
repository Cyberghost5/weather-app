<?php
if (isset($_GET['lat']) && isset($_GET['lon']) && isset($_GET['apiKey'])) {
    $lat = $_GET['lat'];
    $lon = $_GET['lon'];
    $apiKey = $_GET['apiKey'];
    $apiUrl = "https://api.openweathermap.org/data/2.5/weather?lat={$lat}&lon={$lon}&units=metric&appid={$apiKey}";
} elseif (isset($_GET['location']) && isset($_GET['apiKey'])) {
    $location = urlencode($_GET['location']);
    $apiKey = $_GET['apiKey'];
    $apiUrl = "https://api.openweathermap.org/data/2.5/weather?q={$location}&units=metric&appid={$apiKey}";
} else {
    echo json_encode(['error' => 'Invalid parameters']);
    exit;
}

$ch = curl_init();
curl_setopt($ch, CURLOPT_URL, $apiUrl);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
$response = curl_exec($ch);
curl_close($ch);

header('Content-Type: application/json');
echo $response;
?>
