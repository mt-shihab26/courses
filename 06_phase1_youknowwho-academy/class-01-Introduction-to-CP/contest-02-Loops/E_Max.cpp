#include <bits/stdc++.h>
using namespace std;

#define endn '\n'

int main()
{
    ios_base::sync_with_stdio(false);
    cin.tie(nullptr);

    int n;
    cin >> n;

    int mx = INT_MIN, tmp;

    for (int i = 0; i < n; i++)
    {
        cin >> tmp;
        mx = max(mx, tmp);
    }

    cout << mx << endn;

    return 0;
}
