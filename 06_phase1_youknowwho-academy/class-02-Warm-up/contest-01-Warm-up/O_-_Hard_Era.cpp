#include <bits/stdc++.h>
using namespace std;

#define endn '\n';

void test_case()
{
    int n;
    cin >> n;
    vector<int> a(n);
    for (int i = 0; i < n; i++)
    {
        cin >> a[i];
    }
    int ans = 0, tmp;
    int len = a.size();
    for (int i = 0, j = 1; i < len; i++, j++)
    {
        if (a[i] > j)
        {
            tmp = a[i] - j;
            ans += tmp;
            j += tmp;
        }
    }
    cout << ans << endn;
}

int main(void)
{
    ios_base::sync_with_stdio(false);
    cin.tie(nullptr);

    int t;
    cin >> t;
    while (t--)
    {
        test_case();
    }

    return 0;
}
// Solved by: Shihab Mahamud (github.com/shihab4t)
// Friday, November 12, 2021 | 08:18:51 AM (+06)