#include <bits/stdc++.h>
using namespace std;

int main()
{
    ios_base::sync_with_stdio(false);
    cin.tie(nullptr);

    int a, b, t;
    cin >> a >> b >> t;

    int times = t / a;
    int total = b * times;

    cout << total << "\n";
    return 0;
}
// Shihab Mahamud (github.com/shihab4t)
// Sunday, April 24, 2022 | 02:03:57 PM (+06)
