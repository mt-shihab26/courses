#include <stdio.h>

int square(int x)
{
    int squared;

    squared = x * x;

    return squared;
}

int main()
{
    int a, sqr;

    scanf("%d", &a);
    sqr = square(a);
    printf("The square of %d is : %d\n", a, sqr);

    return 0;
}