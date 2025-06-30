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

    int n, j, ind = 1;

    cin >> n;

    for (int i = n; i >= 1; i--)
    {
        for (j = 1; j < i; j++)
        {
            cout << " ";
        }
        for (j = i; j < i + ind; j++)
        {
            cout << "*";
        }
        cout << endn;
        ind += 2;
    }

    ind = (n*2) - 1;

    for (int i = 1; i <= n; i++)
    {
        for (j = 1; j < i; j++)
        {
            cout << " ";
        }
        for (j = i; j < i + ind; j++)
        {
            cout << "*";
        }
        cout << endn;
        ind -= 2;
    }

    return 0;
}
// Shihab Mahamud (github.com/shihab4t)
