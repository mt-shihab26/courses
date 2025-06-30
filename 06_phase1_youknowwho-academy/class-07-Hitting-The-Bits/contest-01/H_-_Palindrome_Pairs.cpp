#include <bits/stdc++.h>
using namespace std;

#define ed '\n'
#define gp ' '
#define lli long long int
#define vec vector
#define str string
#define all(x) x.begin(), x.end()

bool solve()
{
    int n;
    cin >> n;

    map<lli, lli> cnt;

    lli ans = 0, value;
    str s;

    for (lli i = 0; i < n; i++)
    {
        cin >> s;

        lli mask = 0;

        for (char c : s)
        {
            value = c - 'a';
            mask ^= (1 << value);
        }

        ans += cnt[mask];

        for (lli flip = 0; flip < 26; flip++)
        {
            mask ^= (1 << flip);

            ans += cnt[mask];

            mask ^= (1 << flip);
        }
        cnt[mask]++;
    }

    cout << ans << ed;
    return true;
}

int32_t main()
{
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);

    solve();

    return 0;
}
// github.com/shihab4t (Shihab Mahamud)
// Tuesday, July 26, 2022 | 06:56:05 AM (+06)
