#include <stdio.h>

int main()
{
    int i;
    int ara[3];

    for (i = 0; i < 3; i += 1)
    {
        scanf("%d", &ara[i]);
    }
    for (i = 0; i < 3; i += 1)
    {
        printf("%d\n", ara[i]);
    }

    return 0;
}