#include <stdio.h>

int main()
{
    char chr;

    scanf("%c", &chr);
    if (chr == 'a' || chr == 'e' || chr == 'i' || chr == 'o' || chr == 'u')
    {
        printf("%c is vowel\n", chr);
    }
    else
    {
        printf("%c is Consonant\n", chr);
    }
   // if (chr == 'A' || chr == 'E' || chr == 'I' || chr == 'O' || chr == 'U')
   // {
   //     printf("%c is vowel\n", chr);
   // }

    return 0;
}