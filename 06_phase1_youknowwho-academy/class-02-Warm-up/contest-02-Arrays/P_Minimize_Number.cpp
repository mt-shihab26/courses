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
    for (int i = 0; i < n; i++)
    {
        cin >> a[i];
    }


    int ct = 0;

    while (true)
    {
        bool is_all_even = true;
        for (int i = 0; i < n; i++)
        {
            if (a[i] % 2 == 1)
            {
                is_all_even = false;
                break;
            }
        }
        if (is_all_even == false)
        {
            break;
        }
        for (int i = 0; i < n; i++)
        {
            a[i] /= 2;
        }
        ct++;
    }

    cout << ct << _end;

    return 0;
}
