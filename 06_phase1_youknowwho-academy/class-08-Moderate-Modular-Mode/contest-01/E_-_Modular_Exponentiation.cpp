#include <bits/stdc++.h>
using namespace std;

#define ed '\n'

int32_t main()
{
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);

    int n, m;
    cin >> n >> m;
    cout << (n >= 27 ? m : m % (1 << n)) << ed; // 1 * 2 ** n

    return 0;
}
// github.com/shihab4t (Shihab Mahamud)
// Monday, August 01, 2022 | 04:26:59 PM (+06)
