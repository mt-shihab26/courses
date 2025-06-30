<?php

namespace App\Models;

use App\Traits\ModelTrait;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Comment extends Model
{
    use HasFactory, ModelTrait;

    protected $fillable = [
        "user_id",
        "post_id",
        "body"
    ];

    public function author(): BelongsTo
    {
        return $this->belongsTo(User::class, "user_id");
    }

    public function post(): BelongsTo
    {
        return $this->belongsTo(Post::class, "post_id");
    }
}
