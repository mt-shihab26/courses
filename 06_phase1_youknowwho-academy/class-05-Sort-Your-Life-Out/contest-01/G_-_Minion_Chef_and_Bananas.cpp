#include <bits/stdc++.h>
using namespace std;

#define ed '\n'
#define gp ' '
#define lli long long int

bool value(const vector<int> &a, const int &k, const int &h)
{
    int len = a.size(), ct = 0;

    for (int i = 0; i < len; i++)
    {
        if (a[i] <= k)
            ct++;
        else
        {
            ct += ceil(a[i] * 1.0 / k);
        }
    }
    // cout << ct << " <- ";
    return ct <= h;
}

bool solve()
{
    int n, h;
    cin >> n >> h;

    vector<int> a(n);
    for (int i = 0; i < n; i++)
        cin >> a[i];

    int low = 1, high = 1e9 + 5, mid;
    while (low <= high)
    {
        mid = low + (high - low) / 2;
        if (value(a, mid, h) == true)
        {
            // cout << mid << ": true " << low << " <-> " << high << ed;
            high = mid - 1;
        }
        else
        {
            // cout << mid << ": false " << low << " <-> " << high << ed;
            low = mid + 1;
        }
    }

    cout << low << ed;
    // cout << low << " " << high << ed << ed;

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
// Sunday, July 03, 2022 | 03:44:27 PM (+06)
