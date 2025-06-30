#include <bits/stdc++.h>
using namespace std;

#define ed '\n'
#define gp ' '
#define int long long int
#define vec vector
#define str string
#define all(x) x.begin(), x.end()

const int mod = 1e9 + 7;
const int inf = 1e9;

bool solve(int ti = 0)
{
    int a, b;
    cin >> a >> b;
    int first = ceil(log2(a));
    int second = ceil(log2(b));

    int ct = 0;
    // // cerr << first << " " << second << ed;
    // for (int i = first; i <= second; i++)
    // {
    //     int tmp = 0;
    //     for (int j = 0; j < i; j++)
    //     {
    //         tmp = tmp | (1LL << j);
    //     }
    //     for (int j = 0; j < i; j++)
    //     {
    //         int tmp2 = tmp ^ (1LL << j);
    //         // cerr << tmp2 << " " << bitset<100>(tmp2) << ed;
    //         if (tmp2 >= a && tmp2 <= b && j != i - 1)
    //         {
    //             ct++;
    //         }
    //     }
    // }
    for (int i = 0; (1LL << i) / 2 <= b; i++)
    {
        for (int j = 0; j <= i - 2; j++)
        {
            int x = (1LL << i) - 1 - (1LL << j);
            ct += a <= x && x <= b;
        }
    }
    cout << ct << ed;
    return true;
}

int32_t main()
{
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);

    solve();

    return 0;
}
// github.com/shihab4t (Shihab Mahamud)
//