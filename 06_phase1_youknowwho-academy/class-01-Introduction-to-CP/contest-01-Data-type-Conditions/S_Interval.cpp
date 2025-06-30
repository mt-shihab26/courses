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

    double num;
    cin >> num;

    if (0 <= num && num <= 100)
    {
        if (num <= 25)
            cout << "Interval [0,25]";
        else if (num <= 50)
            cout << "Interval (25,50]";
        else if (num <= 75)
            cout << "Interval (50,75]";
        else if (num <= 100)
            cout << "Interval (75,100]";
    }
    else
    {
        cout << "Out of Intervals\n";
    }

    return 0;
}
// Shihab Mahamud (github.com/shihab4t)
// Friday, April 29, 2022 | 01:59:01 PM (+06)
