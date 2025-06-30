#include <bits/stdc++.h>
using namespace std;

#define _end '\n'
#define _vec vector
#define _len(a) a.size();

void __insertion_sort(_vec<int> &a)
{
    int n = _len(a);
    for (int i = 0; i < n; i++)
    {
        for (int j = i - 1; j >= 0; j--)
        {
            if (a[j] > a[j + 1])
                swap(a[j], a[j + 1]);
            else
                break;
        }
    }
}

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

    __insertion_sort(a);

    for (int i = 0; i < n; i++)
    {
        cout << a[i] << " ";
    }

    cout << _end;

    return 0;
}
