#include <bits/stdc++.h>
using namespace std;

#define end '\n'
#define vec vector
#define str string
#define len(a) a.size();
#define slen(s) s.length();

int32_t main()
{
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);

    int n;
    cin >> n;
    int tmp, mn = INT_MAX, mx = INT_MIN;
    for (int i = 0; i < n; i++)
    {
        cin >> tmp;
        mn = min(tmp, mn);
        mx = max(tmp, mx);
    }

    cout << mn << " " << mx << "\n";

    return 0;
}
