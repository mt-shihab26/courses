#include <bits/stdc++.h>
using namespace std;

#define endn '\n'

int main()
{
    ios_base::sync_with_stdio(false);
    cin.tie(nullptr);

    long long a, b, c, d;
    cin >> a >> b >> c >> d;

    // cout << a << " " << b << " " << c << " " << d << "\n";

    long long ans = (a % 100) * (b % 100) * (c % 100) * (d % 100);

    // cout << ans << " ";

    int last = ans % 10;
    ans /= 10;
    int last2 = ans % 10;

    cout << last2 << last << endn;

    return 0;
}
