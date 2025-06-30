#include <bits/stdc++.h>
using namespace std;

#define vec vector
#define endn '\n'

int32_t main()
{
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);

    int n;
    cin >> n;
    vec<int> a(n);

    int sum = 0;
    for (int i = 0; i < n; i++)
    {
        cin >> a[i];
        sum += a[i];
    }

    int last = 1 << n, tmp_sum;

    bool is_yes = false;

    if (sum % 360 == 0)
        is_yes = true;

    // cout << sum << " ";

    for (int mask = 1; mask < last; mask++)
    {
        tmp_sum = 0;
        for (int j = 0; j < n; j++)
        {
            if (mask & (1 << j))
            {
                tmp_sum += a[j];
            }
        }
        if (sum - tmp_sum == tmp_sum || sum - 360 - tmp_sum == tmp_sum)
        {
            // cout << tmp_sum << " ";
            is_yes = true;
        }
    }

    cout << (is_yes ? "YES" : "NO") << endn;

    return 0;
}
// Shihab Mahamud (github.com/shihab4t)
// Sunday, May 08, 2022 | 12:43:23 AM (+06)