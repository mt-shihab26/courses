#include <stdio.h>
#include <string.h>

int main(void) 
{
    int i, t, n, j, total, amount;
    char temp[10];
    scanf("%d", &t);

    for (i = 0; i < t; i++) {
        printf("Case %d:\n", i+1);
        total = 0;

        scanf("%d", &n);
        for (j = 0; j < n; j++) {
            scanf("%s", temp);
            if (strcmp(temp, "donate") == 0) {
                scanf("%d", &amount);
                total += amount;
            }
            else {
                printf("%d\n", total);
            }
        }
    }
    return 0;
}