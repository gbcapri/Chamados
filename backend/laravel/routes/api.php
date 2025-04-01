<?php

use App\Http\Controllers\ChamadoController;
use Illuminate\Support\Facades\Route;

Route::middleware(['auth:sanctum'])->group(function () {
    Route::get('/chamados', [ChamadoController::class, 'index']);
    Route::post('/chamados', [ChamadoController::class, 'store']);
    Route::put('/chamados/{id}', [ChamadoController::class, 'update']);
    Route::delete('/chamados/{id}', [ChamadoController::class, 'destroy']);
});

