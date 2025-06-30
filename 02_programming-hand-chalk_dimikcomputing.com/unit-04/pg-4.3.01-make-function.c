#include <stdio.h>

int min(int a, int b)
{
    int temp;

    if (a < b){
        temp = a;
    }
    else{
        temp = b;
    }

    return temp;
}

int main()
{
    int x, y, smaller;

    scanf("%d %d", &x, &y);
    smaller = min(x, y);
    printf("%d\n", smaller);

    return 0;
}