<?php
// ===================================================
// enquire-now-api.php
// Paramantra CRM endpoint for "Enquire Now" forms
// Used by all project pages (Palacio, Palm Altezze, NC216, etc.)
// ===================================================

// --- CORS Headers ---
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');
header('Content-Type: application/json');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

$raw  = file_get_contents('php://input');
$body = json_decode($raw, true);

if (!$body) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Invalid JSON payload']);
    exit();
}

function splitName(string $fullName): array {
    $parts = explode(' ', trim($fullName), 2);
    return [$parts[0] ?? '', $parts[1] ?? '.'];
}

[$fName, $lName] = splitName($body['name'] ?? '');

$input = [
    'rep_id'      => 'ramya@rrlprojects.com',
    'channel_id'  => 'Enquire Now',
    'subject'     => 'Lead from Website',
    'f_name'      => $fName,
    'l_name'      => $lName,
    'email'       => $body['email']   ?? '',
    'phonefax'    => $body['phone']   ?? '',
    'notes'       => $body['message'] ?? 'I am Interested in this project. Please call me',
    'project'     => $body['project'] ?? 'RRL Palacio',
    'alert_client'=> 0,
    'alert_rep'   => 0,
];

$url      = 'https://cloud.paramantra.com/paramantra/api/data/new/format/json';
$api_key  = 'H1LJFFq52EHqoCt5E3qszzr6y0';
$app_name = '16F24';

$ch = curl_init();
curl_setopt($ch, CURLOPT_URL,            $url);
curl_setopt($ch, CURLOPT_HTTPHEADER,     ["X-API-KEY: $api_key ", "ACTION-ON: $app_name"]);
curl_setopt($ch, CURLOPT_POSTFIELDS,     $input);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_CONNECTTIMEOUT, 30);
curl_setopt($ch, CURLOPT_TIMEOUT,        30);
curl_setopt($ch, CURLOPT_USERPWD,        $api_key);

$response  = curl_exec($ch);
$http_code = curl_getinfo($ch, CURLINFO_HTTP_CODE);
curl_close($ch);

if ($http_code >= 200 && $http_code < 300) {
    echo json_encode(['success' => true]);
} else {
    http_response_code(500);
    echo json_encode(['success' => false, 'message' => 'CRM submission failed']);
}
?>
