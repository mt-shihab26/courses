#include <bits/stdc++.h>
using namespace std;

#define endn '\n'

int main()
{
    ios_base::sync_with_stdio(false);
    cin.tie(nullptr);

    double a, b;
    cin >> a >> b;

    double res = b * 100 / a;

    cout << 100 - res << endn;

    return 0;
}
// Shihab Mahamud (github.com/shihab4t)
// Monday, April 25, 2022 | 03:04:52 PM (+06)
