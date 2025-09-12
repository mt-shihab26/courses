<?php

namespace App\Base;

use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Http\JsonResponse;
use Illuminate\Routing\Controller as BaseController;

class Controller extends BaseController
{
    use AuthorizesRequests, ValidatesRequests;

    public function json($body, int $status = 200): JsonResponse
    {
        return new JsonResponse($body, $status);
    }

    public function happy($data, int $status = 200): JsonResponse
    {
        $status = $status < 200 || 300 <= $status ? 200 : $status;
        return $this->json(["data" => $data], $status);
    }

    public function error($error, int $status = 400): JsonResponse
    {
        $status = $status < 400 || 600 <= $status ? 200 : $status;
        return $this->json(["error" => $error], $status);
    }
}
