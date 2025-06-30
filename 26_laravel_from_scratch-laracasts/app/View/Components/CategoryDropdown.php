<?php

namespace App\View\Components;

use Closure;
use Illuminate\Contracts\View\View;
use Illuminate\View\Component;
use App\Models\Category;


class CategoryDropdown extends Component
{
    public function render(): View|Closure|string
    {
        return view('components.category-dropdown', [
            "categories" => Category::all(),
            "currentCategory" => Category::where("slug", request()["category"])->first(),
        ]);
    }
}
