<?php
dd('Arquivo api.php está sendo carregado!');

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ChamadoController;

Route::get('/teste', function () {
    return response()->json(['message' => 'API funcionando!']);
});

Route::middleware('api')->group(function () {
    Route::get('/chamados', [ChamadoController::class, 'index']);
    Route::post('/chamados', [ChamadoController::class, 'store']);
    Route::get('/chamados/{id}', [ChamadoController::class, 'show']);
    Route::put('/chamados/{id}', [ChamadoController::class, 'update']);
    Route::delete('/chamados/{id}', [ChamadoController::class, 'destroy']);
});

