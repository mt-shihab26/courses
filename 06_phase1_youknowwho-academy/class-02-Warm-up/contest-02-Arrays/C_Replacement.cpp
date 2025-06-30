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
    int tmp;

    for (int i = 0; i < n; i++)
    {
        cin >> tmp;
        if (tmp > 0)
            cout << 1;
        else if (tmp < 0)
            cout << 2;
        else
            cout << 0;
        cout << " ";
    }
    cout << endn;

    return 0;
}
