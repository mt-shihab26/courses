#include <stdio.h>

int main()
{
    int i;
    int n[5] = {2, 3, 5, 7, 11};

    for (i = 4; i >= 0; i -= 1)
    {
        printf("%d\n", n[i]);
    }

    return 0;
}