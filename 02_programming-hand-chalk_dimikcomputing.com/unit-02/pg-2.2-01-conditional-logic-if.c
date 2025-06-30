#include <stdio.h>

int main()
{
    int x, y;

    x = 6;
    y = x % 2;
    if (y == 0)
    {
        printf("%d is even\n", x);
    }

    return 0;
}