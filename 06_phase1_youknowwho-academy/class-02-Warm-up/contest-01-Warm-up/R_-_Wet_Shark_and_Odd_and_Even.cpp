#include <bits/stdc++.h>
using namespace std;

#define endn '\n'
#define vec vector

int32_t main()
{
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);

    int n;
    cin >> n;
    vec<int> a(n), odds;
    int64_t sum = 0;
    for (int i = 0; i < n; i++)
    {
        cin >> a[i], sum += a[i];
        if (a[i] % 2)
            odds.push_back(a[i]);
    }
    sort(odds.begin(), odds.end());

    int i = 0, odds_len = odds.size();
    while (sum % 2 && i < odds_len)
    {
        sum -= odds[i];
        i++;
    }

    cout << sum << endn;

    return 0;
}
