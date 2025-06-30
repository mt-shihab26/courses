#include <bits/stdc++.h>
using namespace std;

#define end '\n'
#define gap ' '
#define int64 long long int
#define str string
#define vec vector

void solve(int i, int e, int &ct)
{
    if (i == e)
    {
        ct++;
        return;
    }
    else if (i > e)
        return;
    solve(i + 1, e, ct);
    solve(i + 2, e, ct);
    solve(i + 3, e, ct);
}

int32_t main()
{
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);

    int s, e;
    cin >> s >> e;
    int ct = 0;

    solve(s, e, ct);

    cout << ct << end;

    return 0;
}
