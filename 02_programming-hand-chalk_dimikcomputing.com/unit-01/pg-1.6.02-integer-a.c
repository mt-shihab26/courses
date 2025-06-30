#include <stdio.h>

int main()
{
    int x, y, z;

    printf("Please Enter the Value of x and then Enter the Value of y: ");
    scanf("%d %d", &x, &y);

    z = x + y;
    printf("The Value of %d + %d = %d\n", x, y, z);

    return 0;
}