<?php

namespace Core;

use Exception;
use JetBrains\PhpStorm\NoReturn;
use Middleware\Middleware;

class Router
{
    protected array $routes = [];
    public function get(string $path, string $controller): static
    {
        return $this->add('GET', $path, $controller);
    }

    public function post(string $path, string $controller): static
    {
        return $this->add('POST', $path, $controller);
    }

    public function delete(string $path, string $controller): static
    {
        return $this->add('DELETE', $path, $controller);
    }

    /** @noinspection PhpUnused */
    public function put(string $path, string $controller): static
    {
        return $this->add('PUT', $path, $controller);
    }

    public function patch(string $path, string $controller): static
    {
        return $this->add('PATCH', $path, $controller);
    }

    public function only(string $key): static
    {
        $last = array_key_last($this->routes);

        $this->routes[$last][array_key_last($this->routes[$last])]["middleware"] = $key;
        return $this;
    }

    /**
     * @throws Exception
     */
    public function run(string $path, string $method): void
    {
        $method = strtoupper($method);

        $result = null;
        if (array_key_exists($path, $this->routes)) {
            $result = $this->routes[$path];
        } else {
            $this->abort();
        }

        if (array_key_exists($method, $result)) {
            $route = $result[$method];
            $this->executeMiddleware($route["middleware"]);
            $this->executeController($route["controller"]);
        } else {
            $this->abort();
        }
    }
    protected function add(string $method, string $path, string $controller): static
    {
        $this->routes[$path][$method] = [
            "controller" => $controller,
            "middleware" => null,
        ];
        return $this;
    }
    protected function executeController(string $controller): void
    {
        require base_path("/Http/Controllers/$controller");
    }

    /**
     * @throws Exception
     */
    protected function executeMiddleware(string|null $middleware): void
    {
        if (!$middleware) {
            return;
        }
        Middleware::resolve($middleware);
    }
    #[NoReturn] protected function abort(): void
    {
        abort(Response::NOT_FOUND);
    }
}