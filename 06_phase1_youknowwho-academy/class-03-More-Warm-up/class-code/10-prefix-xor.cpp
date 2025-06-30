#include <bits/stdc++.h>
using namespace std;

int main()
{
    int n, c;
    cin >> n >> c;

    int ct = 0, i, j;

    for (i = 0; i <= n; i++)
    {
        j = c ^ i;
        if (0 <= j && j <= n && i <= j)
        {
            cout << i << " " << j << " " << (i ^ j) << "\n";
            ct++;
        }
        // O(n)
    }

    cout << ct << "\n";
}