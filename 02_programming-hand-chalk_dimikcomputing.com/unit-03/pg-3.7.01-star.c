#include <stdio.h>

int main()
{
    int i, n, j;

    scanf("%d", &n);
    for (i = 1; i <= n; i += 1)
    {
        for (j = 1; j <= i; j += 1)
        {
            printf("*");
        }
        printf("\n");
    }

    return 0;
}