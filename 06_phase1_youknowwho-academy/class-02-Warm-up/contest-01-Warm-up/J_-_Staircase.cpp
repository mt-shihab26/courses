#include <bits/stdc++.h>
using namespace std;

#define endn '\n'
#define vec vector

int32_t main()
{
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);

    int32_t n, i, j;
    cin >> n;

    for (i = 0; i < n; i++)
    {
        for (j = 0; j < n - i - 1; j++)
        {
            cout << " ";
        }
        for (; j < n; j++)
        {
            cout << "#";
        }
        cout << endn;
    }

    return 0;
}
