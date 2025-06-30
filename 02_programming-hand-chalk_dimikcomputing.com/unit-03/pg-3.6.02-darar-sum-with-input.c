#include <stdio.h>

int main()
{
    int start, step, end, i, sum;

    scanf("%d %d %d", &start, &step, &end);
    for (i = start, sum = 0; i <= end; i += step)
    {
        sum += i;
    }
    printf("Sum is %d\n", sum);

    return 0;
}