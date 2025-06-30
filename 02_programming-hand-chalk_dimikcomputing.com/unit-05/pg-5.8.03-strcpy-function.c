#include <stdio.h>
#include <string.h>

int main()
{
    char a[100] = "Coding";
    char b[100];

    strcpy(b, a);

    printf("%s\n", a);
    printf("%s\n", b);

    return 0;
}