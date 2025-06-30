#include <bits/stdc++.h>
using namespace std;

#define _end '\n'
#define _vec vector
#define _str string
#define _len(a) a.size();

int32_t main()
{
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);

    int n, q, x;
    cin >> n >> q;
    _vec<int> a(n);
    for (int i = 0; i < n; i++)
        cin >> a[i];

    sort(a.begin(), a.end());

    while (q--)
    {
        cin >> x;
        auto res = binary_search(a.begin(), a.end(), x);
        if (res)
            cout << "found" << _end;
        else
            cout << "not found" << _end;
    }

    return 0;
}
