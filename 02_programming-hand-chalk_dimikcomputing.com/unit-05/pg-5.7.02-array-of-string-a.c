#include <stdio.h>

int main()
{
    char ara_of_str[3][10] = {"Shihab", "Mahamud", {'T', 'a', 'n', 'i', 'm', '\0'}};
    int i;

    for (i = 0; i < 3; i += 1){
        printf("%s\n", ara_of_str[i]);
    }

    return 0;
}