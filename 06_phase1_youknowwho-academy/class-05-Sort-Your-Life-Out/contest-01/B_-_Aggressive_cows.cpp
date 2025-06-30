#include <bits/stdc++.h>
using namespace std;

#define ed '\n'
#define gp ' '
#define lli long long int
#define vec vector
#define str string

bool is(vec<int> &a, int des, int count_cow)
{
    int len = a.size();
    int ct = 1;
    for (int i = 1, j = 0; i < len; i++)
    {
        int tmp_des = a[i] - a[j];
        if (tmp_des >= des)
        {
            ct++;
            j = i;
        }
    }
    return ct >= count_cow;
}

bool solve()
{
    int n, count_cow;
    cin >> n >> count_cow;
    vec<int> a(n);
    for (int i = 0; i < n; i++)
        cin >> a[i];

    sort(a.begin(), a.end());

    int low = 1, high = 1e9 + 10, mid;

    while (low <= high)
    {
        mid = low + (high - low) / 2;
        if (is(a, mid, count_cow))
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

    return 0;
}
// github.com/shihab4t (Shihab Mahamud)
// Friday, July 08, 2022 | 12:07:32 AM (+06)
