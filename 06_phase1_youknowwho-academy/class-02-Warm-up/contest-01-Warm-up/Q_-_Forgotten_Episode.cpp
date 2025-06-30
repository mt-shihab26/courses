#include <stdio.h>
#include <stdlib.h>

int compar(const void *a, const void *b)
{
    return (*(int *)a - *(int *)b);
}

int main(void)
{

    // freopen("input.txt", "rt", stdin);
    // freopen("output.txt", "wt", stdout);

    int n, i;

    scanf("%d", &n);

    int episode[n];

    for (i = 0; i < n; i++)
        episode[i] = 0;

    for (i = 0; i < n - 1; i++)
        scanf("%d", &episode[i]);

    qsort(episode, n - 1, sizeof(int), compar);

    for (i = 0; i < n; i++)
        if (episode[i] != i + 1)
        {
            printf("%d\n", i + 1);
            break;
        }

    return 0;
}
// Author: Shihab Mahamud
// Date: Thursday, April 29, 2021 | 12:31:15 PM
// Problem Link: https://codeforces.com/problemset/problem/440/A