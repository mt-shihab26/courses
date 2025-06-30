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

    int a, b;
    cin >> a >> b;

    int last, tmp;
    bool is_lucky, is_any_lucky = false;

    for (int i = a; i <= b; i++)
    {
        is_lucky = true;
        tmp = i;
        while (tmp)
        {
            last = tmp % 10;
            if (last != 4 && last != 7)
            {
                is_lucky = false;
                break;
            }
            tmp /= 10;
        }
        if (is_lucky)
        {
            is_any_lucky = true;
            cout << i << " ";
        }
    }

    if (!is_any_lucky)
    {
        cout << -1;
    }

    cout << endn;

    return 0;
}
// Shihab Mahamud (github.com/shihab4t)
