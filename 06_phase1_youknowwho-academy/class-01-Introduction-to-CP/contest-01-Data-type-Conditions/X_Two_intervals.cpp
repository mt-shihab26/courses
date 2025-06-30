#include <bits/stdc++.h>
using namespace std;

#define endn '\n'

int main()
{
    ios_base::sync_with_stdio(false);
    cin.tie(nullptr);

    int l1, r1, l2, r2, mn, mx;
    cin >> l1 >> r1 >> l2 >> r2;

    if (r1 >= l2 && l1 <= r2)
    {
        cout << max(l2, l1) << " " << min(r1, r2) << endn;
    }
    else
    {
        cout << -1 << endn;
    }

    return 0;
}