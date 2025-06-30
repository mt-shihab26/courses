#include <bits/stdc++.h>
using namespace std;

#define endn '\n'
#define vec vector

int32_t main()
{
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);

    int n;
    cin >> n;
    int64_t sum = 0, tmp;

    for (int i = 0; i < n; i++)
    {
        cin >> tmp;
        sum += tmp;
    }

    cout << abs(sum) << endn;

    return 0;
}
