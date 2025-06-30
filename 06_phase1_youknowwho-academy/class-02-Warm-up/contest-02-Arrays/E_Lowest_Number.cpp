#include <bits/stdc++.h>
using namespace std;

#define _end '\n'
#define _vec vector
#define _len(a) a.size();

int32_t main()
{
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);

    int lowest = INT_MAX, lowest_position = 0, n, tmp;

    cin >> n;

    for (int i = 1; i <= n; i++)
    {
        cin >> tmp;
        if (lowest > tmp) {
            lowest = tmp;
            lowest_position = i;
        }
    }

    cout << lowest << " " << lowest_position << _end;

    return 0;
}
