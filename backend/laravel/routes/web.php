<?php

use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('welcome');
});

Route::get('/teste-direto', function () {
    return response()->json(['message' => 'Rota direta no web.php funcionando!']);
});


