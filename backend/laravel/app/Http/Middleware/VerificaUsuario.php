<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;

class VerificaUsuario
{
    public function handle(Request $request, Closure $next)
    {
        if (!$request->user()) {
            return response()->json(['message' => 'Acesso não autorizado'], 403);
        }

        return $next($request);
    }
}
