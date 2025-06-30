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

    int n;
    cin >> n;

    int x = 0, y = 1, tmp;

    for (int i = 0; i < n; i++)
    {
        cout << x << " ";
        tmp = x;
        x = y;
        y = tmp + y;
    }

    return 0;
}
// Shihab Mahamud (github.com/shihab4t)
