#include <bits/stdc++.h>
using namespace std;

int n, k, a[57];
bool ok(long long m)
{
    long long cnt = 0;
    for (int i = 1; i <= n; i++)
        cnt += min(m, 1LL * a[i]);
    return (cnt >= m * k);
}

int main()
{
    ios_base ::sync_with_stdio(false);
    cin.tie(NULL);

    cin >> k >> n;
    for (int i = 1; i <= n; i++)
        cin >> a[i];
    long long l = 0, r = 5e10, m;
    while (l <= r)
    {
        m = l + (r - l) / 2;
        if (ok(m))
            l = m + 1;
        else
            r = m - 1;
    }
    cout << r << '\n';

    return 0;
}