#include <stdio.h>

int main() {
    int test, a, b;
    char temp;
    scanf("%d", &test);
    while(test--) {
        scanf("%d%d", &a, &b);
        if (a < b) temp = '<';
        else if (a > b) temp = '>';
        else temp = '=';
        printf("%c\n", temp);
    }
    
    return 0;
}