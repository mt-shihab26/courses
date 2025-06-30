#include <bits/stdc++.h>
using namespace std;

#define end '\n'
#define gap ' '
#define int64 long long int
#define str string
#define vec vector

void solve(const vec<int> &a, int i, int n, int mx)
{
    if (i == n)
        return;
    int tmp = max(mx, a[i]);
    cout << tmp << " ";
    solve(a, i + 1, n, tmp);
}

int32_t main()
{
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);

    int n;
    cin >> n;
    vec<int> a(n);
    for (int i = 0; i < n; i++)
        cin >> a[i];

    solve(a, 0, n, a[0]);

    // int mx = a[0];
    // for (int i = 0; i < n; i++)
    // {
    //     mx = max(mx, a[i]);
    //     cout << mx << " ";
    // }

    return 0;
}
