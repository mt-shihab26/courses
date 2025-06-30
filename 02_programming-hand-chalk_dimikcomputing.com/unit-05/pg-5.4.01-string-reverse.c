#include <stdio.h>

int main()
{
    char str[30] = "Bangla", str_new[30];
    int i, j;

    for (i = 5, j = 0; i >= 0; i -= 1)
    {
        str_new[j] = str[i];
        j += 1;
    }
    str_new[j] = '\0';
    printf("%s\n", str_new);

    return 0;
}