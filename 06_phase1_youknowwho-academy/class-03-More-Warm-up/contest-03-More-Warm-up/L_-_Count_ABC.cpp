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

    int n, ct = 0;
    cin >> n;
    str a;
    cin >> a;

    for (int i = 0; i <= n-3; i++)
    {
        if (a[i] == 'A' && a[i+1] == 'B' && a[i+2] == 'C')
        {
            ct++;
        }
    }

    cout << ct << ed;

    return 0;
}
