#include <bits/stdc++.h>
using namespace std;

#define endn '\n'
#define llint long long int
#define vec vector

template <typename T>
ostream &operator<<(ostream &ostream, const vector<T> &v)
{
    for (auto &i : v)
        cout << i << " ";
    return ostream;
}

template <typename T>
istream &operator>>(istream &istream, vector<T> &v)
{
    for (auto &i : v)
        cin >> i;
    return istream;
}

int main()
{
    ios_base::sync_with_stdio(false);
    cin.tie(nullptr);

    int t, n, m, i, sum, mn, mx;
    cin >> t;
    while (t--)
    {
        cin >> n >> m;

        mn = min(n, m);
        mx = max(n, m);

        i = mn + 1;
        i = i % 2 == 1 ? i : i + 1;

        // cout << i << ": ";
        sum = 0;
        for (; i < mx; i += 2)
        {
            sum += i;
        }
        cout << sum << endn;
    }

    return 0;
}
// Shihab Mahamud (github.com/shihab4t)
