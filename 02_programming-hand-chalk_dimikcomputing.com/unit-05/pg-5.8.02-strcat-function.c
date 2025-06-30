#include <stdio.h>
#include <string.h>

int main()
{
    char a[100] = "Shihab ", b[100] = "Mahamud";

    strcat(a, b);
    printf("%s\n", a);

    return 0;
}