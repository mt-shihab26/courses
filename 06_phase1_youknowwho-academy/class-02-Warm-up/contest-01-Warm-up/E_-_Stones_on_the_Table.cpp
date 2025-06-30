#include <bits/stdc++.h>
using namespace std;

#define endn '\n'
#define vec vector

int32_t main()
{
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);

    int n;
    cin >> n;
    string s;
    cin >> s;

    int ct = 0;
    for (int i = 0; i < n - 1; i++)
    {
        if (s[i] == s[i + 1])
        {
            ct++;
        }
    }

    cout << ct << endn;

    return 0;
}

/*
#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <math.h>
#include <ctype.h>

int main(void) {

    int n;
    char *s;
    scanf("%d", &n);
    s = (char *)malloc(sizeof(char)*(n+1));
    scanf("%s", s);
    int count = 0;
    // printf("%s", s);
    for (int i=0; i<n-1; i++) {
        if (s[i] == s[i+1]) {
            count++;
        }
    }
    printf("%d\n", count);

    return 0;
}
// Author: Shihab Mahamud
// Date: Wednesday, May 12, 2021 | 11:57:53 PM (+06)
// Problem Link:
*/