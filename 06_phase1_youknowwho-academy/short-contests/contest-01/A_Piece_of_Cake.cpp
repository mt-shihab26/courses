#include <bits/stdc++.h>
using namespace std;

#define ed '\n'
#define gp ' '
#define ll long long int
#define vec vector
#define str string
#define all(x) x.begin(), x.end()

const int mod = 1e9 + 7;
const int inf = 1e9;

bool solve(int ti = 0)
{
    int n;
    cin >> n;
    vec<int> a(n);
    int ct[4] = {0};
    for (int i = 0; i < n; i++)
    {
        cin >> a[i];
        ct[a[i]]++;
    }

    int mx = max(ct[1], max(ct[2], ct[3]));

    cout << n - mx << ed;

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
//