#include <bits/stdc++.h>
using namespace std;

#define end '\n'
#define gap ' '
#define int64 long long int
#define str string
#define vec vector

int32_t main()
{
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);

    int n, ct = 1;
    cin >> n;
    while (n > 1)
    {
        if (n % 2 == 1)
            n = (3 * n) + 1;
        else
            n /= 2;
        ct++;
    }
    cout << ct << end;

    return 0;
}
