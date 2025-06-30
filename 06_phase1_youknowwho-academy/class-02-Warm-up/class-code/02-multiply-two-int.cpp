#include <bits/stdc++.h>
using namespace std;

#define endn '\n'
#define vec vector

int32_t main()
{
    int a = 1e9, b = 1e9;

    int ans = a * b;
    cout << ans << endn;

    int64_t ans2 = (int64_t)a * b;
    cout << ans2 << endn;

    int64_t ans3 = a * b * 1ll;
    cout << ans3 << endn;

    int64_t ans4 = 1ll * a * b;
    cout << ans4 << endn;

    return 0;
}
