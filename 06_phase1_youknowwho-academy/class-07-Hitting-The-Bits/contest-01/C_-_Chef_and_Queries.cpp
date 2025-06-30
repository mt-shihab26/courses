#include <bits/stdc++.h>
using namespace std;

#define ed '\n'
#define gp ' '
#define lli long long int
#define vec vector
#define str string
#define all(x) x.begin(), x.end()

const lli mx = (1LL << 31) + 25;
const lli mod = (1LL << 32);
vec<bool> bit(mx);
lli q, a, b, sum = 0;
unsigned int s;

int32_t main()
{
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);

    cin >> q >> s >> a >> b;
    while (q--)
    {
        lli x = s / 2;
        if (s & 1)
        {
            if (bit[x] == false)
            {
                bit[x] = true;
                sum += x;
            }
        }
        else
        {
            if (bit[x] == true)
            {
                bit[x] = false;
                sum -= x;
            }
        }
        s *= a;
        s += b;
    }

    cout << sum << ed;

    return 0;
}
// github.com/shihab4t (Shihab Mahamud)
// Tuesday, July 26, 2022 | 02:57:20 PM (+06)
