#include <stdio.h>

int main()
{
    char chr;

    scanf("%c", &chr);
    if (chr >= '0' && chr <= '9')
    {
        printf("Disit\n");
    }
    else
    {
        printf("Not Disit\n");
    }

    return 0;
}