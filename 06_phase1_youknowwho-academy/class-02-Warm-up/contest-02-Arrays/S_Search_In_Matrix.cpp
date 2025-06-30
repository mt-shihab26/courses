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

    int n, m;
    cin >> n >> m;

    int *a = new int[n * m];

    for (int i = 0; i < n * m; i++)
        cin >> a[i];

    int x;
    cin >> x;

    bool got_it = false;

    for (int i = 0; i < n * m; i++)
    {
        if (a[i] == x)
        {
            got_it = true;
            break;
        }
    }

    if (got_it)
        cout << "will not take number" << _end;
    else
        cout << "will take number" << _end;

    delete[] a;
    return 0;
}
