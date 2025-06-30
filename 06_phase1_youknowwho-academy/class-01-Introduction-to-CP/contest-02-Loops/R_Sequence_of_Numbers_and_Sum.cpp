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

    int n, m, mn, mx, sum, i;

    while (true)
    {
        cin >> n >> m;

        if (n <= 0 || m <= 0)
            break;

        mn = min(n, m);
        mx = max(n, m);

        sum = 0;
        for (i = mn; i <= mx; i++)
        {
            sum += i;
            cout << i << " ";
        }
        cout << "sum =" << sum << endn;
    }

    return 0;
}
// Shihab Mahamud (github.com/shihab4t)
