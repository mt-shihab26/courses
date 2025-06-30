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

    int ct = 1;

    while (n--)
    {
        cout << ct++ << " ";
        cout << ct++ << " ";
        cout << ct++ << " ";
        cout << "PUM" << endn;
        ct++;
    }

    return 0;
}
// Shihab Mahamud (github.com/shihab4t)
