#include <bits/stdc++.h>
using namespace std;

#define ed '\n'
#define gp ' '
#define lli long long int

lli value(lli mid, lli k)
{
    lli sum = 0;
    if (mid > k)
    {
        sum = (k * (k + 1)) / 2;
        lli left = mid - k;
        lli next_part = sum - k;
        lli bard = k - 1 - left;
        next_part -= (bard * (bard + 1)) / 2;
        sum += next_part;
        // cout << sum << ":? ";
    }
    else
    {
        sum = (mid * (mid + 1)) / 2;
        // cout << sum << ": ";
    }
    return sum;
}

bool solve()
{
    lli k, x;
    cin >> k >> x;

    lli low = 1, high = (2 * k) - 1, ans, mid;

    if (value(high, k) <= x)
    {
        cout << high << ed;
        return true;
    }

    while (low <= high)
    {
        mid = low + (high - low) / 2;
        if (value(mid, k) >= x)
        {
            ans = mid;
            high = mid - 1;
        }
        else
            low = mid + 1;
    }
    // cout << " -> " << ans << ed;
    cout << ans << ed;

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
// Sunday, July 03, 2022 | 12:43:10 AM (+06)
