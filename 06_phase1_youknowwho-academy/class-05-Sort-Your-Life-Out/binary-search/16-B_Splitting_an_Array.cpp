#include <bits/stdc++.h>
using namespace std;

const int N = 1e5 + 7;
int n, k, a[N];
bool okay(long long m)
{
    long long temp = m, cnt = 1;
    for (int i = 1; i <= n; i++)
    {
        if (a[i] > m)
            return false;
        if (temp >= a[i])
            temp -= 1LL * a[i];
        else
            cnt++, temp = m - 1LL * a[i];
    }
    return (cnt <= k);
}

int main()
{
    ios_base ::sync_with_stdio(false);
    cin.tie(NULL);

    cin >> n >> k;
    for (int i = 1; i <= n; i++)
        cin >> a[i];
    long long l = 1, r = 1e14, m;
    while (l <= r)
    {
        m = l + (r - l) / 2;
        if (okay(m))
            r = m - 1;
        else
            l = m + 1;
    }
    cout << l << '\n';

    return 0;
}