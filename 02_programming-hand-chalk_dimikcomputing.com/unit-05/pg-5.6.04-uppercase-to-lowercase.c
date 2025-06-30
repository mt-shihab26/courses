#include <stdio.h>

int main()
{
    char ch, lower;

    scanf("%c", &ch);
    lower = ch - 'A' + 'a';
    printf("The lower of %c is %c\n", ch, lower);

    return 0;
}