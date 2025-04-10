<?php

namespace App\Providers;

use Illuminate\Foundation\Support\Providers\RouteServiceProvider as ServiceProvider;
use Illuminate\Support\Facades\Route;

class RouteServiceProvider extends ServiceProvider
{
    public const HOME = '/home';

    public function boot(): void
    {
        // Depuração para ver se este código está sendo executado
        dd('RouteServiceProvider está sendo carregado!');

        $this->routes(function () {
            Route::middleware('api')
                ->prefix('api')
                ->group(function () {
                    require base_path('routes/api.php');
                });

            Route::middleware('web')
                ->group(base_path('routes/web.php'));
        });
    }
 
}

