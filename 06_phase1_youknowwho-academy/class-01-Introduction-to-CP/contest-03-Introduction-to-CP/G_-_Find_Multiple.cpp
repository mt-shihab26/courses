#include <bits/stdc++.h>
using namespace std;

#define endn '\n'

int main()
{
    ios_base::sync_with_stdio(false);
    cin.tie(nullptr);

    int a, b, c;
    cin >> a >> b >> c;

    int ans = -1;

    int i = 1;
    while (true)
    {
        int mul = c * i;

        if (a <= mul && mul <= b)
        {
            ans = mul;
            break;
        }

        if (mul > b)
        {
            break;
        }

        i++;
    }

    cout << ans << endn;
    return 0;
}
// Shihab Mahamud (github.com/shihab4t)
// Sunday, April 24, 2022 | 02:14:16 PM (+06)
