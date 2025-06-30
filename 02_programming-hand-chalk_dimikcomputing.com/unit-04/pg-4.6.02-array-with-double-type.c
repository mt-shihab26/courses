#include <stdio.h>

int main()
{
    double a[5] = {90.5, 77.54, 89.90, 65.67, 99.99};

    for (int i = 1; i <= 5; i += 1)
    {
        printf("Roll: %d, Marks: %lf\n", i, a[i-1]);
    }

    return 0;
}