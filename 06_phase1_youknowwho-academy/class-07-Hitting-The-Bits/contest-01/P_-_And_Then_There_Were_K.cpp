#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <math.h>
#include <ctype.h>

int main(void)
{
    int test, num;
    scanf("%d", &test);
    while (test--)
    {
        scanf("%d", &num);
        int x = 1;
        while (1)
        {
            if (x * 2 > num)
            {
                printf("%d\n", x - 1);
                break;
            }
            x *= 2;
        }
    }

    return 0;
}