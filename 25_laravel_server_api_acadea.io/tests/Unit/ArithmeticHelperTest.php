<?php

namespace Tests\Unit;

use App\Helpers\ArithmeticHelper;
use InvalidArgumentException;
use PHPUnit\Framework\TestCase;

class ArithmeticHelperTest extends TestCase
{
    // Happy path

    public function test_plus_can_add_numbers_together(): void
    {
        $n1 = rand(1, 100);
        $n2 = rand(1, 100);

        $s = $n1 + $n2;

        $r = ArithmeticHelper::plus($n1, $n2);

        $this->assertSame($s, $r, "Does not add numbers correctly");
    }

    public function test_plus_can_take_in_multiple_numbers()
    {
        $n1 = rand(1, 100);
        $n2 = rand(1, 100);
        $n3 = rand(1, 100);

        $s = $n1 + $n2 + $n3;

        $r = ArithmeticHelper::plus($n1, $n2, $n3);

        $this->assertSame($s, $r, "Does not add multiple numbers");
    }

    // Sad path

    public function test_plus_cannot_take_string_arguments()
    {
        $this->expectException(InvalidArgumentException::class);
        ArithmeticHelper::plus("abc");
    }

    public function test_plus_cannot_take_array_arguments()
    {
        $this->expectException(InvalidArgumentException::class);
        ArithmeticHelper::plus(["abc"]);
    }

    public function test_plus_cannot_take_null_arguments()
    {
        $this->expectException(InvalidArgumentException::class);
        ArithmeticHelper::plus(null);
    }

    public function test_plus_cannot_take_boolean_arguments()
    {
        $this->expectException(InvalidArgumentException::class);
        ArithmeticHelper::plus(true);
    }

    public function test_plus_cannot_take_function_arguments()
    {
        $this->expectException(InvalidArgumentException::class);
        ArithmeticHelper::plus(fn() => true);
    }

    public function test_plus_needs_at_least_one_argument()
    {
        $this->expectException(InvalidArgumentException::class);
        ArithmeticHelper::plus();
    }
}
