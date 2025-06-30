#include <bits/stdc++.h>
using namespace std;

#define end '\n'
#define vec vector
#define str string
#define len(a) a.size()
#define slen(s) s.length()

void print(int n, char c)
{
    if (n == 0)
        return;
    cout << c << " ";
    print(n - 1, c);
}

int32_t main()
{
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);

    int t;
    cin >> t;
    while (t--)
    {
        int n;
        char c;

        cin >> n >> c;

        print(n, c);
        cout << "\n";
    }

    return 0;
}
