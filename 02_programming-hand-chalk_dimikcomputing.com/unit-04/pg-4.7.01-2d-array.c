#include <stdio.h>

int main()
{
    int i, j;
    double maths[2][5];

    maths[0][0] = 67.87;
    maths[0][1] = 99.5;
    maths[0][2] = 45.56;
    maths[0][3] = 56.76;
    maths[0][4] = 77.88;

    maths[1][0] = 87.8;
    maths[1][1] = 54.6;
    maths[1][2] = 87;
    maths[1][3] = 98;
    maths[1][4] = 78.7;

    for (i = 0; i < 2; i += 1)
    {
        for (j = 0; j < 5; j += 1)
        {
            printf("Class = %d, Roll = %d, Marks = %.2lf\n", 6 + i, j + 1, maths[i][j]);
        }
        printf("\n");
    }

    return 0;
}