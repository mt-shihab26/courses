#include <bits/stdc++.h>
using namespace std;

#define ed '\n'
#define gp ' '
#define i64 long long int
#define str string
#define vec vector

map<str, int> dict;

bool solve()
{
    int count = 0;
    str word;

    while (true)
    {
        cin >> word;
        if (word == ".")
            break;
        count += dict[word];
    }

    cout << count << ed;

    return true;
}

int32_t main()
{
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);

    int m, n;
    cin >> m >> n;

    str pos;
    int sal;

    while (m--)
    {
        cin >> pos >> sal;
        dict[pos] = sal;
    }

    while (n--)
    {
        solve();
    }

    return 0;
}
