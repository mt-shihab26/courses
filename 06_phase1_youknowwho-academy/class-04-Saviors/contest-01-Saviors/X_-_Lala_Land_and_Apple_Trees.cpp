#include <bits/stdc++.h>
using namespace std;

#define ed '\n'
#define gp ' '
#define i64 long long int
#define str string
#define vec vector
#define all(x) x.begin(), x.end()

int32_t main()
{
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);

    int n, x, a;
    cin >> n;
    vec<pair<int, int>> xap, xan;
    for (int i = 0; i < n; i++)
    {
        cin >> x >> a;
        if (x > 0)
            xap.push_back({x, a});
        else
            xan.push_back({x, a});
    }

    sort(xap.begin(), xap.end(), [](pair<int, int> a, pair<int, int> b)
         { return a.first < b.first; });

    sort(xan.begin(), xan.end(), [](pair<int, int> a, pair<int, int> b)
         { return a.first > b.first; });

    int mn = min(xap.size(), xan.size());

    int sum = 0, i;

    for (i = 0; i < mn; i++)
        sum += xap[i].second + xan[i].second;

    if (xap.size() > xan.size())
        sum += xap[i].second;
    else
        sum += xan[i].second;
    
    cout << sum << ed;

    return 0;
}
// Shihab Mahamud (github.com/shihab4t)
// Saturday, June 18, 2022 | 08:32:32 PM (+06)
