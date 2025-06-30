#include <stdio.h>

int main()
{
    freopen("input_file.txt", "rt", stdin);
    freopen("output.txt", "wt", stdout);

    int num1, num2, sum;

    while (2 == scanf("%d %d", &num1, &num2)){
        sum = num1 + num2;
        printf("%d\n", sum);
    }

    return 0;
}