#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <math.h>
#include <ctype.h>
#include <stdbool.h>

int is_vowel(char c) {
    if (c>='A' && c<='Z') 
        c = c+32;
    switch (c)
    {
    case 'a':
        return true;
    case 'e':
        return true;
    case 'i':
        return true;
    case 'o':
        return true;
    case 'u':
        return true;
    case 'y':
        return true;
    default:
        return false;
    }
}

int main(void) 
{
    char str[102];
    scanf("%s", str);
    for (int i=0; i<strlen(str); i++) {
        if (!is_vowel(str[i])) {
            if (str[i]>='A' && str[i]<='Z') {
                str[i] += 32;
            }
            printf(".%c", str[i]);
        }
    }
    printf("\n");
    
    return 0; 
}
