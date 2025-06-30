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

    map<str, str> dict;
    str tmp, tmp2, tmp3;

    while (getline(cin, tmp))
    {
        if (tmp == "")
        {
            break;
        }
        stringstream ss;
        ss << tmp;
        ss >> tmp2 >> tmp3;
        dict[tmp3] = tmp2;
    }

    while (cin >> tmp)
    {
        if (dict[tmp] == "")
            cout << "eh" << ed;
        else
            cout << dict[tmp] << ed;
    }

    return 0;
}
// Shihab Mahamud (github.com/shihab4t)
// Friday, June 10, 2022 | 01:57:00 AM (+06)
