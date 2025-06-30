#include <bits/stdc++.h>
using namespace std;

const int N = 2e5;
int a[N];

bool ok(string &t, string &s, int m)
{
    int cnt = 0;
    for (int i = 0; i < t.size() && cnt < s.size(); i++)
    {
        if (a[i] <= m)
            continue;
        else if (t[i] == s[cnt])
            cnt++;
    }
    return (cnt == s.size());
}

int main()
{
    ios_base ::sync_with_stdio(false);
    cin.tie(NULL);

    string s, t;
    cin >> t >> s;
    for (int i = 1, x; i <= t.size(); i++)
    {
        cin >> x;
        a[x - 1] = i;
    }
    int l = 0, r = t.size(), m;
    while (l <= r)
    {
        m = l + (r - l) / 2;
        if (ok(t, s, m))
            l = m + 1;
        else
            r = m - 1;
    }
    cout << r << '\n';

    return 0;
}