#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <math.h>
#include <ctype.h>
#include <stdbool.h>

int main(void) {
    char word[102];
    scanf("%s", word);
    int i;

    int upper_len=0, lower_len=0;

    for (i=0; word[i]; i++) {
        if (word[i]>='A' && word[i]<='Z') 
            upper_len++;
        else
            lower_len++;
    }

    if (upper_len>lower_len) {
        for (i=0; word[i]; i++) {
            if (word[i]>='a' && word[i]<='z') {
                word[i] -= 32;
            }
        }     
    }         
    else {
        for (i=0; word[i]; i++) {
            if (word[i]>='A' && word[i]<='Z') {
                word[i] += 32;
            }
        }
    }
       
    printf("%s\n", word);

    return 0;
}
// Author: shihab4t
// Date: Saturday, May 22, 2021 | 11:11:23 PM (+06)
