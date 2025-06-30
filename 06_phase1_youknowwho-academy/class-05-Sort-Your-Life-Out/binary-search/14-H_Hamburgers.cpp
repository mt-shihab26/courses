#include <bits/stdc++.h>
using namespace std;

long long nb, ns, nc, pb, ps, pc, b, s, c;
bool ok(long long m, long long rub)
{
    long long tb = m * b - nb, ts = m * s - ns, tc = m * c - nc;
    if (tb > 0)
        rub -= tb * pb;
    if (ts > 0)
        rub -= ts * ps;
    if (tc > 0)
        rub -= tc * pc;
    return (rub >= 0);
}

int main()
{
    ios_base ::sync_with_stdio(false);
    cin.tie(NULL);

    string str;
    long long rub;
    cin >> str;
    b = s = c = 0;
    for (int i = 0; i < str.size(); i++)
    {
        if (str[i] == 'B')
            b++;
        else if (str[i] == 'S')
            s++;
        else
            c++;
    }
    cin >> nb >> ns >> nc >> pb >> ps >> pc >> rub;
    long long l = 0, r = 1e13, m;
    while (l <= r)
    {
        m = l + (r - l) / 2;
        if (ok(m, rub))
            l = m + 1;
        else
            r = m - 1;
    }
    cout << r << '\n';

    return 0;
}