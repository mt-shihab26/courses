#include <bits/stdc++.h>
using namespace std;

#define ed '\n'
#define gap ' '
#define int64 long long int
#define str string
#define vec vector

int32_t main()
{
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);

    int n, ans = 0, tmp;
    cin >> n;
    while (n--)
    {
        cin >> tmp;
        ans ^= tmp;
    }
    cout << ans << ed;

    return 0;
}
