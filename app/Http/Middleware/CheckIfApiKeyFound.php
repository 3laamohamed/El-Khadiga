<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class CheckIfApiKeyFound
{
    /**
     * Handle an incoming request.
     *
     * @param \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next): Response
    {
        $key = $request->query('api-key') ?? $request['api-key'] ?? '';

        if ($key === env('WEEKEND_MAP_API_KEY')) {
            return $next($request);
        }
        return response()->json(['message' => 'Page not found', 'status' => false], 404);
    }
}
