#include <bits/stdc++.h>
using namespace std;

#define ed '\n'
#define gp ' '
#define i64 long long int
#define str string
#define vec vector
#define all(x) x.begin(), x.end()

bool test()
{
    string ss, str = "";
    getline(cin, ss);
    ss += '\n';
    for (int i = 0; i < ss.size(); i++)
    {
        if (ss[i] == ' ' || ss[i] == '\n')
        {
            reverse(str.begin(), str.end());
            cout << str << ss[i];
            str = "";
        }
        else
            str += ss[i];
    }
    return true;
}

int32_t main()
{
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);

    // freopen("out.txt", "w", stdout);

    int t;
    cin >> t;
    cin.ignore();
    while (t--)
    {
        test();
    }

    return 0;
}
// Shihab Mahamud (github.com/shihab4t)
