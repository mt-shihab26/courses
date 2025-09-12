<?php

namespace Core;

class Container
{
    protected array $bindings = [];
    public function bind($key, $resolver): void
    {
        $this->bindings[$key] = $resolver;
    }
    public function resolve($key)
    {
        return $this->bindings[$key]();
    }
}
