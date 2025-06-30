#include <bits/stdc++.h>
using namespace std;

#define endn '\n'
#define umap unordered_map
#define uset unordered_set
#define pb push_back

typedef long long int llint;

const int md = 998244353;

llint big_mod(llint b, llint p, llint m)
{
    if (p == 0)
        return 1;
    if (p == 1)
        return b % m;

    llint ans = big_mod(b, p / 2, m);
    ans = (ans * ans) % m;
    if (p % 2 == 1)
        ans = (ans * (b % m)) % m;
    return ans;
}

int main(void)
{
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);

    llint w, h;
    cin >> w >> h;
    cout << big_mod(2, w + h, md) << endn;

    return 0;
}
// Solved by: Shihab Mahamud (github.com/shihab4t)
// Thursday, October 21, 2021 | 08:28:57 AM (+06)