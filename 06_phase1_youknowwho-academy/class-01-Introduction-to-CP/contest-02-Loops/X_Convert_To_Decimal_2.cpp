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

    int t, n, ct, pw, dec;
    cin >> t;

    while (t--)
    {
        cin >> n;
        ct = 0, pw = 0;
        while (n)
        {
            if (n % 2 == 1)
            {
                ct++;
            }
            n /= 2;
        }
        dec = 0;
        while (ct--)
        {
            dec += pow(2, pw++);
        }
        cout << dec << endn;
    }

    return 0;
}
// Shihab Mahamud (github.com/shihab4t)
