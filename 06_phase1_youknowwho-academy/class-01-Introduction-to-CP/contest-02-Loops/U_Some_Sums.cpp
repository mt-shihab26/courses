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

int sum_of_digit(int n)
{
    int sum = 0;
    while (n)
    {
        sum += (n % 10);
        n /= 10;
    }
    return sum;
}

int main()
{
    ios_base::sync_with_stdio(false);
    cin.tie(nullptr);

    int n, a, b;
    cin >> n >> a >> b;

    int sum = 0, i, sum_digit;

    for (i = 1; i <= n; i++)
    {
        sum_digit = sum_of_digit(i);
        if (a <= sum_digit && sum_digit <= b)
        {
            sum += i;
        }
    }

    cout << sum << endn;

    return 0;
}
// Shihab Mahamud (github.com/shihab4t)
