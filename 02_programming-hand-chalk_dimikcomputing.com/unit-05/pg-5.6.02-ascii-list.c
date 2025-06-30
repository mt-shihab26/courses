#include <stdio.h>

int main()
{
    int ascii;

    for (ascii = 0; ascii <= 255; ascii += 1){
        printf("Ascii - %d = %c\n", ascii, ascii);
    }

    return 0;
}