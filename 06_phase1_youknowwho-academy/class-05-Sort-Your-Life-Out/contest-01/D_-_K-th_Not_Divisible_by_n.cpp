#include <bits/stdc++.h>
using namespace std;

#define ed '\n'
#define gp ' '
#define lli long long int

lli solve()
{
    int n, k;
    cin >> n >> k;

    lli low = 1, high = 1e18 + 5, mid, tmp;

    while (low <= high)
    {
        mid = low + (high - low) / 2;
        tmp = mid - (mid / n);
        if (tmp == k)
        {
            if (mid % n != 0)
                return mid;
            high = mid - 1;
        }
        else if (tmp > k)
            high = mid - 1;
        else
            low = mid + 1;
    }

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
        cout << solve() << ed;
    }

    // solve();

    return 0;
}
// github.com/sh048b (Shihab Mahamud)
// Sunday, July 03, 2022 | 02:05:35 PM (+06)
