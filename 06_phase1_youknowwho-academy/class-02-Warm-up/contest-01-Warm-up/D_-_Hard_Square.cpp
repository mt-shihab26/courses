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

    for (int i = 1; i < n; i++)
        cout << "* ";
    cout << "*\n";
    for (int i = 1; i <= n - 2; i++)
    {
        cout << "* ";
        for (int j = 1; j <= n - 2; j++)
        {
            cout << "  ";
        }
        cout << "*\n";
    }

    for (int i = 1; i < n; i++)
        cout << "* ";
    cout << "*\n";

    return 0;
}
