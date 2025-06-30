#include <bits/stdc++.h>
using namespace std;
const int mod = 1e9 + 7;

int bigmod(int a, int b)
{
    if (b == 1)
        return a;
    int x = bigmod(a, b / 2);
    return ((1LL * x * x) % mod * ((b & 1) ? a : 1)) % mod;
}

int inverse(int x)
{
    return bigmod(x, mod - 2);
}

bool check(int x, int a, int b)
{
    while (x)
    {
        if (x % 10 != a && x % 10 != b)
            return 0;
        x /= 10;
    }
    return 1;
}

void solve()
{
    int a, b, n, ans = 0;
    cin >> a >> b >> n;
    vector<int> fact(n + 1);
    fact[0] = 1;
    for (int i = 1; i <= n; i++)
    {
        fact[i] = (1LL * i * fact[i - 1]) % mod;
    }
    for (int i = 0; i <= n; i++)
    {
        if (check(i * a + (n - i) * b, a, b))
        {
            ans = (ans + 1LL * fact[n] * inverse((1LL * fact[i] * fact[n - i]) % mod)) % mod;
        }
    }
    cout << ans << '\n';
}

int main()
{
    ios_base ::sync_with_stdio(false);
    cin.tie(NULL);
    cout.tie(NULL);

    solve();

    return 0;
}
