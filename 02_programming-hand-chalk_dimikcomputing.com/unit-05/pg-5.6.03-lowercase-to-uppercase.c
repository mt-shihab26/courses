#include <stdio.h>

int main()
{
    char ch , capital;
    
    scanf("%c", &ch);
    capital = ch - 'a' + 'A';
    printf("Capital of %c is %c\n", ch, capital);

    return 0;
}