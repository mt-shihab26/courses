#include <bits/stdc++.h>
using namespace std;

int main()
{
    int n, c;
    cin >> n >> c;

    int ct = 0, i, j;

    for (i = 0; i <= n; i++)
    {
        for (j = i; j <= n; j++)
        {
            if ((i ^ j) == c)
            {
                cout << i << " " << j << " " << (i ^ j) << "\n";
                ct++;
            }
        }
        // O(n*n)
    }

    cout << ct << "\n";
}