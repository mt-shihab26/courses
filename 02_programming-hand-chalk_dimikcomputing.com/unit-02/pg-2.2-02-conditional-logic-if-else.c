#include <stdio.h>

int main()
{
    int x, y;

    x = 5;
    y = x % 2;
    if (y == 0)
    {
        printf("%d is even\n", x);
    }
    else
    {
        printf("%d is odd\n", x);
    }

    return 0;
}