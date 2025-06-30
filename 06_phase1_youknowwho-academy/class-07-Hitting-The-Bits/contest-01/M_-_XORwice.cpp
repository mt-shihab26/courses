#include <bits/stdc++.h>
using namespace std;

#define ed '\n'
#define gp ' '
#define lli long long int
#define vec vector
#define str string
#define all(x) x.begin(), x.end()

/*
    6 ->  00000110
    12 -> 00001100

    4 ->  00000100
*/

bool solve()
{
    int a, b;

    cin >> a >> b;

    int x = 0;

    for (int i = 30; i >= 0; i--)
    {
        if ((a & (1 << i)) && (b & (1 << i)))
            x = x | (1 << i);
    }

    cout << (a ^ x) + (b ^ x) << ed;

    return true;
}

int32_t main()
{
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);

    int t;
    cin >> t;
    while (t--)
    {
        solve();
    }

    return 0;
}
// github.com/shihab4t (Shihab Mahamud)
// Friday, July 22, 2022 | 10:12:03 PM (+06)
