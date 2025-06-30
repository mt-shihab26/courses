#include <stdio.h>

int main()
{
    char str[20] = {'B', 'a', 'n', 'g', 'd', 'e', 's', 'h', '\0'}; // NULL = '\0'

    char str2[20] = "Programming";

    printf("%s\n", str);
    printf("%s\n", str2);

    return 0;
}