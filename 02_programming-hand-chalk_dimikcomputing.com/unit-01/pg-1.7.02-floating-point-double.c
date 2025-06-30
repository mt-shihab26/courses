#include <stdio.h>

int main()
{
    double db;

    printf("Please Enter a decimal number: ");
    scanf("%lf", &db);

    printf("The Floating point Values is: %lf\n", db);
    printf("The Flaoting point Values with Specific : %.2lf\n",db);

    return 0;
}