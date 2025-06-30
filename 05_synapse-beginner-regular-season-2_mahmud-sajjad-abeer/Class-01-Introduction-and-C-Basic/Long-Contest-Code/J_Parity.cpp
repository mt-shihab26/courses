#include <stdio.h>
// #include <string.h>
// #include <math.h>
// #include <ctype.h>
// #include <stdlib.h>

int main(void)
{

    // freopen("input.txt", "rt", stdin);
    // freopen("output.txt", "wt", stdout);

    int i, t, num, count, j;
    scanf("%d", &t);

    for (i = 0; i < t; i++) {
        printf("Case %d: ", i+1);
        scanf("%d", &num);
        count = 0;
        for (j = 0; j <= 31; j++) {
            if (1 & num) {
                count++;
            }
            num = num >> 1;
        }
        printf("%s\n", (count % 2) ? "odd":"even");
    }

    return 0;
}
// Author: Shihab Mahamud
// Date: Wednesday, May 05, 2021 | 03:45:56 PM (+06)
// Problem Link: https://lightoj.com/problem/parity