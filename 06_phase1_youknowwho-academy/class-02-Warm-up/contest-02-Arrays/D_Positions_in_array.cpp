#include <bits/stdc++.h>
using namespace std;

#define _end '\n'
#define _vec vector
#define _len(a) a.size();

int32_t main()
{
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);

    int n, tmp;
    cin >> n;

    for (int i = 0; i < n; i++)
    {
        cin >> tmp;
        if (tmp <= 10)
        {
            cout << "A[" << i << "] = " << tmp << _end;
        }
    }

    return 0;
}
