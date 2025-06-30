#include <stdio.h>

int main()
{
    int table[10][10];

    int i, j, n;
    for (i = 0; i < 10; i += 1)
    {
        for (j = 0; j < 10; j += 1)
        {
            table[i][j] = (i + 1) * (j + 1);
        }
    }

    scanf("%d", &n);

    for (i = 0; i < 10; i += 1)
    {
        printf("%d x %d = %d\n", n, i + 1, table[n - 1][i]);
    }

    return 0;
}