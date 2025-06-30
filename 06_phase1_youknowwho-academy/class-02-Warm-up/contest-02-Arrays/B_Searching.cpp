#include <bits/stdc++.h>
using namespace std;

#define endn '\n'
#define vec vector

int32_t main()
{
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);

    int n;
    cin >> n;
    int *a = new int[n];

    for (int i = 0; i < n; i++)
    {
        cin >> a[i];
    }

    int k;
    cin >> k;
    bool in = false;

    for (int i = 0; i < n; i++)
    {
        if (a[i] == k)
        {
            in = true;
            cout << i << endn;
            break;
        }
    }

    if (!in) cout << -1 << endn;

    delete[] a;
    return 0;
}
