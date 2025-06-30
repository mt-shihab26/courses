#include <bits/stdc++.h>
using namespace std;

#define _end '\n'
#define _vec vector
#define _str string
#define _len(a) a.size();

int64_t fib(int n)
{
    if (n == 1)
        return 0;
    if (n == 2)
        return 1;

    int64_t x = 0, y = 1, tmp;

    for (int i = 3; i <= n; i++)
    {
        tmp = x;
        x = y;
        y = tmp + y;
    }

    return y;
}

int32_t main()
{
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);

    int n;
    cin >> n;
    cout << fib(n) << _end;

    return 0;
}
