#include <bits/stdc++.h>
using namespace std;

const int N = 1e5 + 7;
int n, x[N], v[N];
bool okay(double m)
{
    double l = -1e18, r = 1e18;
    for (int i = 1; i <= n; i++)
    {
        l = max(l, 1.0 * x[i] - m * v[i]);
        r = min(r, 1.0 * x[i] + m * v[i]);
        if (l > r)
            return false;
    }
    return true;
}

int main()
{
    ios_base ::sync_with_stdio(false);
    cin.tie(NULL);

    cin >> n;
    for (int i = 1; i <= n; i++)
        cin >> x[i] >> v[i];
    double l = 0, r = 1e18, m;
    for (int i = 1; i <= 100; i++)
    {
        m = l + (r - l) / 2.0;
        if (okay(m))
            r = m;
        else
            l = m;
    }
    cout << fixed << setprecision(10) << r << '\n';

    return 0;
}