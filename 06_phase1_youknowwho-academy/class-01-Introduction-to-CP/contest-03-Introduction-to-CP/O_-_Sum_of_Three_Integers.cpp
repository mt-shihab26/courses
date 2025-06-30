#include <bits/stdc++.h>
using namespace std;

#define endn '\n'

int main()
{
    ios_base::sync_with_stdio(false);
    cin.tie(nullptr);

    int k, s;
    cin >> k >> s;

    int i, j, tmp;

    int ct = 0;

    for (i = 0; i <= k; i++)
    {
        for (j = 0; j <= k; j++)
        {
            tmp = s - (i + j);
            // cout << i << " " << j << " " << tmp << endn;
            if (0 <= tmp && tmp <= k)
            {
                ct++;
            }
        }
    }

    cout << ct << endn;

    return 0;
}
// Shihab Mahamud (github.com/shihab4t)
// Tuesday, April 26, 2022 | 01:18:50 PM (+06)
