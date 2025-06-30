#include <bits/stdc++.h>
using namespace std;

#define ed '\n'
#define gp ' '
#define int64 long long int
#define str string
#define vec vector

int32_t main()
{
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);

    int n, k;
    cin >> n >> k;

    int ct = 0;

    while (n)
    {
        ct++;
        n /= k;
    }

    cout << ct << ed;

    return 0;
}
