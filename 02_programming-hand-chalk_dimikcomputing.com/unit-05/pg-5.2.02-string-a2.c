#include <stdio.h>

int main()
{
    char str[30];

    scanf("%[^\n]", str);

    printf("%s\n", str);

    return 0;
}