#include <stdio.h>
// #include <string.h>
// #include <math.h>
// #include <ctype.h>
#include <stdlib.h>

int main(void)
{

    // freopen("input.txt", "rt", stdin);
    // freopen("output.txt", "wt", stdout);

    int len;
    char *result;

    scanf("%d", &len);

    result = (char *)malloc(sizeof(char) * (len + 1));

    scanf("%s", result);

    int a_count = 0, d_count = 0;
    for (int i = 0; i < len + 1; i++)
    {
        if (result[i] == 'A')
            a_count++;
        else if (result[i] == 'D')
            d_count++;
    }

    if (a_count > d_count)
        printf("Anton\n");
    else if (d_count > a_count)
        printf("Danik\n");
    else
        printf("Friendship\n");

    return 0;
}
// Author: Shihab Mahamud
// Date: Wednesday, April 28, 2021 | 04:09:57 PM
// Problem Link: https://codeforces.com/problemset/problem/734/A