#include <bits/stdc++.h>
using namespace std;

#define ed '\n'
#define gp ' '
#define i64 long long int
#define str string
#define vec vector
#define all(x) x.begin(), x.end()

bool solve()
{
    int n, age;
    str name, line;
    cin >> n;
    map<int, str> mp;
    cin.ignore();
    while (n--)
    {
        getline(cin, line);
        age = stoi(line.substr(line.length() - 4, 4));
        name = line.substr(0, line.length() - 5);
        mp[-age] = name;
    }

    for (auto i : mp)
    {
        cout << i.second << ed;
    }

    return true;
}

bool test()
{
    int t;
    cin >> t;
    while (t--)
    {
        solve();
    }
    return true;
}

int32_t main()
{
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);

    test();

    return 0;
}
// Shihab Mahamud (github.com/shihab4t)
// Saturday, June 18, 2022 | 09:04:25 PM (+06)
