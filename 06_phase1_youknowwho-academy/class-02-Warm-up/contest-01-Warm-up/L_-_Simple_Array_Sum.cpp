#include <bits/stdc++.h>
using namespace std;

#define endn '\n'
#define vec vector

int32_t main()
{
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);

    int n, tmp, sum = 0;
    cin >> n;
    for (int i = 0; i < n; i++)
        cin >> tmp, sum += tmp;
    cout << sum << endn;

    return 0;
}
