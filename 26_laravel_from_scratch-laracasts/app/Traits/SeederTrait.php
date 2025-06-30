<?php

namespace App\Traits;

use Illuminate\Support\Facades\DB;

trait SeederTrait
{
    public function getDBDriverName(): string
    {
        return DB::connection()->getDriverName();
    }

    public function disableForeignKeyCheck(): void
    {
        // DB::statement("SET FOREIGN_KEY_CHECKS=0");
    }

    public function enableForeignKeyCheck(): void
    {
        // DB::statement("SET FOREIGN_KEY_CHECKS=1");
    }

    public function truncateTable(string $tableName): void
    {
        DB::table($tableName)->truncate();
    }

    public function withTruncate(string $tableName, callable $fn): void
    {
        $this->disableForeignKeyCheck();
        $this->truncateTable($tableName);
        $fn();
        $this->enableForeignKeyCheck();
    }

    public function truncate($model, int $count): void
    {
        $this->withTruncate($model::table(), fn () => $model::factory($count)->create());
    }
}
