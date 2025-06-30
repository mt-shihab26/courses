#include <stdio.h>

int main()
{   
    char ara_of_str[3][10];
    int i;

    for (i = 0; i < 3; i += 1){
        scanf("%s", ara_of_str[i]);
    }
    for (i = 0; i < 3; i += 1){
        printf("%s\n", ara_of_str[i]);
    }

    return 0;
}