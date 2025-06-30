#include <bits/stdc++.h>
using namespace std;

#define ed '\n'
#define gp ' '
#define lli long long int
#define vec vector
#define str string

bool solve()
{
    int n, to = 0, i, j, first, mid, last;
    cin >> n;
    vec<int> a(n);
    for (int i = 0; i < n; i++)
    {
        cin >> a[i];
        to ^= a[i];
        a[i] = to;
    }

    if (to == 0)
    {
        cout << "YES" << ed;
        return true;
    }

    bool flag = false;

    for (i = 0; i < n; i++)
    {
        for (j = i + 1; j < n; j++)
        {
            first = a[i];
            mid = a[j] ^ a[i];
            last = to ^ a[j];

            if (first == mid && mid == last)
                flag = true;
        }
    }

    if (flag == true)
    {
        cout << "YES" << ed;
        return true;
    }
    cout << "NO" << ed;

    return false;
}

int main()
{
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);

    int t;
    cin >> t;
    while (t--)
    {
        solve();
    }

    return 0;
}
// github.com/shihab4t (Shihab Mahamud)
// Sunday, July 24, 2022 | 06:38:05 PM (+06)
