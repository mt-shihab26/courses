#include <bits/stdc++.h>
using namespace std;

#define end '\n'
#define gap ' '
#define int64 long long int
#define str string
#define vec vector

bool is_possible(int64 i, int64 n)
{
    if (i == n)
        return true;
    if (i > n)
        return false;
    int64 res = is_possible(i * 20, n);
    if (res)
        return true;
    res = is_possible(i * 10, n);
    return res;
}

int32_t main()
{
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);

    int64 t;
    cin >> t;
    int64 n;
    while (t--)
    {
        cin >> n;
        cout << (is_possible(1, n) ? "YES" : "NO") << end;
    }

    return 0;
}
