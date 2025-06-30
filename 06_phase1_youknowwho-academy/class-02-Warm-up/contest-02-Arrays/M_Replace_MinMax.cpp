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

    int n;
    cin >> n;

    _vec<int> a(n);
    int min_indx = 0, max_indx = 0, mn = INT_MAX, mx = INT_MIN;

    for (int i = 0; i < n; i++)
    {
        cin >> a[i];
        if (mn > a[i])
        {
            min_indx = i;
            mn = a[i];
        }
        if (mx < a[i])
        {
            max_indx = i;
            mx = a[i];
        }
    }

    swap(a[min_indx], a[max_indx]);

    for (int i = 0; i < n; i++)
    {
        cout << a[i] << " ";
    }
    cout << _end;

    return 0;
}
