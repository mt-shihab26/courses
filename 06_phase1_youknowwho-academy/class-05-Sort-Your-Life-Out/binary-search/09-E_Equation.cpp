#include <bits/stdc++.h>
using namespace std;

#define ed '\n'
#define gp ' '
const double ee = 1e-6;

int main()
{
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);

    double c;
    cin >> c;

    double low = 0, high = 10e10, mid, tmp;

    while (high - low > 1e-7)
    {
        mid = low + (high - low) / 2.0;
        tmp = (mid * mid) + sqrt(mid);
        if (tmp > c)
            high = mid;
        else
            low = mid;
    }

    cout << fixed << setprecision(17) << low << ed;

    return 0;
}
// Wednesday, June 29, 2022 | 03:34:09 PM (+06)