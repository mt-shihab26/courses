#include <bits/stdc++.h>
using namespace std;

#define end '\n'
#define vec vector
#define str string
#define len(a) a.size()
#define slen(s) s.length()

int32_t main()
{
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);

    int n;
    cin >> n;
    double ans = 0, tmp;
    for (int i = 0; i < n; i++) 
    {
        cin >> tmp;
        ans += tmp;
    }
    ans /= n;

    cout << fixed << setprecision(7);
    cout << ans << end;

    return 0;
}
