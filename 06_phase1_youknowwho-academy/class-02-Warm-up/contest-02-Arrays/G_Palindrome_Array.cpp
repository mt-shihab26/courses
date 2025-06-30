#include <bits/stdc++.h>
using namespace std;

#define _end '\n'
#define _vec vector
#define _len(a) a.size();

int32_t main()
{
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);

    int n;
    cin >> n;
    _vec<int> a(n);

    for (int i = 0; i < n; i++)
    {
        cin >> a[i];
    }

    bool is = true;

    for (int i = 0, j = n - 1; i < j; i++, j--)
    {
        if (a[i] != a[j])
        {
            is = false;
            break;
        }
    }

    if (is)
    {
        cout << "YES" << _end;
    }
    else {
        cout << "NO" << _end;
    }

    return 0;
}
