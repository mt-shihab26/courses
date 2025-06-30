#include <bits/stdc++.h>
using namespace std;

#define endn '\n'
#define vec vector

int32_t main()
{
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);

    int n, k, tmp;
    cin >> n >> k;

    for (int i = 0; i < n; i++)
    {
        cin >> tmp;
        if (tmp != k)
        {
            cout << tmp << " ";
        }
    }
    cout << endn;

    return 0;
}
