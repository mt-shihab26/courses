#include <bits/stdc++.h>
using namespace std;

#define ed '\n'
#define gp ' '
#define i64 long long int
#define str string
#define vec vector

int32_t main()
{
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);

    map<int, int> mp, is, od;
    int tmp, i = 1;
    while (cin >> tmp)
    {
        mp[tmp]++;
        if (is[tmp] == false)
        {
            is[tmp] = true;
            od[i++] = tmp;
        }
    }

    for (auto i : od)
    {
        cout << i.second << gp << mp[i.second] << ed;
    }

    return 0;
}
