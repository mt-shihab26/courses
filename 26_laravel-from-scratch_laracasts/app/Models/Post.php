<?php

namespace App\Models;

use App\Traits\ModelTrait;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Post extends Model
{
    use HasFactory, ModelTrait;

    protected $fillable = [
        "title",
        "excerpt",
        "body",
        "published_at",
        "slug",
        "thumbnail"
    ];

    public function author(): BelongsTo
    {
        return $this->belongsTo(User::class, "user_id");
    }

    public function category(): BelongsTo
    {
        return $this->belongsTo(Category::class, "category_id");
    }

    public function comments(): HasMany
    {
        return $this->hasMany(Comment::class, "post_id");
    }

    /** @noinspection PhpUnused */
    public function scopeFilter($query, array $filters): void
    {
        $query->when(
            $filters['search'] ?? false,
            fn($query, $search) => $query->where(
                fn($query) => $query->where('title', 'like', '%' . $search . '%')
                    ->orWhere('body', 'like', '%' . $search . '%')
            )
        );

        $query->when(
            $filters['category'] ?? false,
            fn($query, $category) => $query
                ->whereHas(
                    'category',
                    fn($query) => $query
                        ->where('slug', $category)
                )
        );

        $query->when(
            $filters['author'] ?? false,
            fn($query, $author) => $query
                ->whereHas(
                    'author',
                    fn($query) => $query
                        ->where('id', $author)
                )
        );
    }
}
