#include <bits/stdc++.h>
using namespace std;

#define endn '\n'
#define llint long long int
#define vec vector

int main()
{
    ios_base::sync_with_stdio(false);
    cin.tie(nullptr);

    llint a, b, c, d;
    cin >> a >> b >> c >> d;

    if (b * log(a) > d * log(c))
        cout << "YES" << endn;
    else
        cout << "NO" << endn;

    return 0;
}
