#include <bits/stdc++.h>
using namespace std;

#define ed '\n'
#define gp ' '
#define lli long long int

bool solve(int n, int q)
{
    vector<int> arr(n + 1);
    for (int i = 1; i <= n; i++)
    {
        cin >> arr[i];
    }
    sort(arr.begin() + 1, arr.end());
    int tmp;
    while (q--)
    {
        cin >> tmp;
        auto it = lower_bound(arr.begin() + 1, arr.end(), tmp);
        if (it != arr.end() && *it == tmp)
            cout << tmp << " found at " << (it - arr.begin()) << ed;
        else
            cout << tmp << " not found" << ed;
    }

    return true;
}

int main()
{
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);

    int n, q, i = 1;
    while (cin >> n >> q && n != 0 && q != 0)
    {
        cout << "CASE# " << i++ << ":\n";
        solve(n, q);
    }

    // solve();

    return 0;
}
// github.com/sh048b (Shihab Mahamud)
// Sunday, July 03, 2022 | 02:50:55 PM (+06)
