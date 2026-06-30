<?php

$baseDir = __DIR__ . '/../public/images';
$productDir = $baseDir . '/products';

if (!is_dir($productDir)) {
    mkdir($productDir, 0755, true);
}

$backgrounds = [
    'hero-berries.jpg' => [90, 155, 60],
    'about-farmland.jpg' => [74, 124, 48],
    'mission-grass.jpg' => [106, 155, 72],
    'contact-shipping.jpg' => [30, 80, 120],
];

$products = [
    'strawberry.jpg' => [180, 50, 60],
    'mango.jpg' => [230, 140, 50],
    'pomegranate-kernels.jpg' => [140, 30, 45],
    'apricot.jpg' => [230, 160, 70],
    'fig.jpg' => [120, 60, 100],
    'guava.jpg' => [180, 200, 160],
    'broccoli.jpg' => [60, 130, 50],
    'cauliflower.jpg' => [220, 220, 210],
    'green-beans.jpg' => [50, 120, 45],
    'carrot.jpg' => [230, 120, 40],
    'green-peas.jpg' => [70, 150, 60],
    'sweet-corn.jpg' => [240, 200, 60],
    'french-fries.jpg' => [220, 170, 60],
];

function createPlaceholder(string $path, array $rgb, int $width = 1200, int $height = 800): void
{
    $im = imagecreatetruecolor($width, $height);
    [$r, $g, $b] = $rgb;
    $base = imagecolorallocate($im, $r, $g, $b);
    imagefill($im, 0, 0, $base);

    $lighter = imagecolorallocate($im, min(255, $r + 30), min(255, $g + 30), min(255, $b + 30));
    for ($i = 0; $i < 8; $i++) {
        imagefilledellipse($im, rand(0, $width), rand(0, $height), rand(200, 500), rand(200, 500), $lighter);
    }

    imagejpeg($im, $path, 85);
    imagedestroy($im);
}

foreach ($backgrounds as $file => $color) {
    createPlaceholder($baseDir . '/' . $file, $color);
}

foreach ($products as $file => $color) {
    createPlaceholder($productDir . '/' . $file, $color, 800, 600);
}

echo "Created " . (count($backgrounds) + count($products)) . " placeholder images.\n";
