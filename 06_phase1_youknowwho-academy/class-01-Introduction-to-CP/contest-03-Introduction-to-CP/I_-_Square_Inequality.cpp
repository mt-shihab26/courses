#include <bits/stdc++.h>
using namespace std;

#define endn '\n'

int main()
{
    ios_base::sync_with_stdio(false);
    cin.tie(nullptr);

    int a, b, c;
    cin >> a >> b >> c;
    if (a * a + b * b < c * c)
    {
        cout << "Yes" << endn;
    }
    else
    {
        cout << "No" << endn;
    }

    return 0;
}
// Shihab Mahamud (github.com/shihab4t)
// Monday, April 25, 2022 | 02:59:46 PM (+06)
