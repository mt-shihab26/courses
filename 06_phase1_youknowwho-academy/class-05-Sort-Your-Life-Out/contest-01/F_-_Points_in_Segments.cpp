#include <bits/stdc++.h>
using namespace std;

#define ed '\n'
#define gp ' '
#define lli long long int

int lower_bound(const vector<int> &arr, int x)
{
    int lw = 0, hi = arr.size() - 1, ans = arr.size(), mid;
    while (lw <= hi)
    {
        mid = (hi + lw) / 2;
        if (arr[mid] >= x)
        {
            ans = mid;
            hi = mid - 1;
        }
        else
            lw = mid + 1;
    }
    return ans;
}

int upper_bound(const vector<int> &arr, int x)
{
    int lw = 0, hi = arr.size() - 1, ans = arr.size(), mid;
    while (lw <= hi)
    {
        mid = (hi + lw) / 2;
        if (arr[mid] > x)
        {
            ans = mid;
            hi = mid - 1;
        }
        else
            lw = mid + 1;
    }
    return ans;
}

bool solve()
{
    int n, q, first, second;
    cin >> n >> q;
    vector<int> a(n);
    for (int i = 0; i < n; i++)
        cin >> a[i];

    while (q--)
    {
        cin >> first >> second;
        // auto first_it = lower_bound(a.begin(), a.end(), first);
        // auto second_it = upper_bound(a.begin(), a.end(), second);

        auto first_it = lower_bound(a, first);
        auto second_it = upper_bound(a, second);
        cout << second_it - first_it << ed;
    }

    return true;
}

int main()
{
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);

    int t, i = 1;
    cin >> t;
    while (t--)
    {
        cout << "Case " << i++ << ":\n";
        solve();
    }

    // solve();

    return 0;
}
// github.com/sh048b (Shihab Mahamud)
// Sunday, July 03, 2022 | 03:00:05 PM (+06)
