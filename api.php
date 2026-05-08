<?php

header("Content-Type: application/json");

$file = "products.json";

if (!file_exists($file)) {
    file_put_contents($file, json_encode([]));
}

$data = json_decode(file_get_contents($file), true);

$method = $_SERVER['REQUEST_METHOD'];

$request = $_SERVER['REQUEST_URI'];

$request = strtok($request, '?');

$path = explode('/', trim($request, '/'));

if ($path[0] !== 'products') {
    http_response_code(404);
    echo json_encode(["message" => "Endpoint not found"]);
    exit;
}

$id = $path[1] ?? null;

if ($method === 'GET') {

    if ($id === null) {
        echo json_encode($data);
        exit;
    }

    foreach ($data as $product) {
        if ($product['id'] == $id) {
            echo json_encode($product);
            exit;
        }
    }

    http_response_code(404);
    echo json_encode(["message" => "Product not found"]);
    exit;
}

if ($method === 'POST') {

    $input = json_decode(file_get_contents("php://input"), true);

    if (
        !isset($input['name']) ||
        !isset($input['price']) ||
        !isset($input['quantity'])
    ) {
        http_response_code(400);
        echo json_encode(["message" => "Invalid data"]);
        exit;
    }

    $newId = 1;

    if (!empty($data)) {
        $ids = array_column($data, 'id');
        $newId = max($ids) + 1;
    }

    $newProduct = [
        "id" => $newId,
        "name" => $input['name'],
        "price" => $input['price'],
        "quantity" => $input['quantity']
    ];

    $data[] = $newProduct;

    file_put_contents($file, json_encode($data, JSON_PRETTY_PRINT));

    http_response_code(201);
    echo json_encode($newProduct);
    exit;
}

if ($method === 'PUT') {

    if ($id === null) {
        http_response_code(400);
        echo json_encode(["message" => "ID is required"]);
        exit;
    }

    $input = json_decode(file_get_contents("php://input"), true);

    $found = false;

    foreach ($data as &$product) {

        if ($product['id'] == $id) {

            if (isset($input['name'])) {
                $product['name'] = $input['name'];
            }

            if (isset($input['price'])) {
                $product['price'] = $input['price'];
            }

            if (isset($input['quantity'])) {
                $product['quantity'] = $input['quantity'];
            }

            $found = true;
            break;
        }
    }

    if (!$found) {
        http_response_code(404);
        echo json_encode(["message" => "Product not found"]);
        exit;
    }

    file_put_contents($file, json_encode($data, JSON_PRETTY_PRINT));

    echo json_encode([
        "message" => "Product updated"
    ]);

    exit;
}

if ($method === 'DELETE') {

    if ($id === null) {
        http_response_code(400);
        echo json_encode(["message" => "ID is required"]);
        exit;
    }

    $found = false;

    foreach ($data as $key => $product) {

        if ($product['id'] == $id) {

            unset($data[$key]);

            $found = true;
            break;
        }
    }

    if (!$found) {
        http_response_code(404);
        echo json_encode(["message" => "Product not found"]);
        exit;
    }

    $data = array_values($data);

    file_put_contents($file, json_encode($data, JSON_PRETTY_PRINT));

    echo json_encode([
        "message" => "Product deleted"
    ]);

    exit;
}

http_response_code(405);
echo json_encode([
    "message" => "Method not allowed"
]);