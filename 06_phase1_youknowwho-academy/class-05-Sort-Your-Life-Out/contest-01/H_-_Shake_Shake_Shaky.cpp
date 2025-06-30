#include <bits/stdc++.h>
using namespace std;

#define ed '\n'
#define gp ' '
#define lli long long int
#define vec vector

bool value(const vec<int> &a, const int &mid, const int &k)
{
    lli ct = 0, len = a.size();
    for (int i = 0; i < len; i++)
    {
        ct += (a[i] / mid);
    }
    return k <= ct;
}

bool solve()
{
    lli n, k;

    cin >> n >> k;
    vector<int> a(n);
    for (int i = 0; i < n; i++)
        cin >> a[i];

    lli low = 1, high = 1000000005, mid;

    while (low <= high)
    {
        mid = low + (high - low) / 2;
        if (value(a, mid, k) == true)
            low = mid + 1;
        else
            high = mid - 1;
    }

    cout << high << ed;

    return true;
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

    // solve();

    return 0;
}
// github.com/sh048b (Shihab Mahamud)
// Sunday, July 03, 2022 | 04:39:46 PM (+06)
