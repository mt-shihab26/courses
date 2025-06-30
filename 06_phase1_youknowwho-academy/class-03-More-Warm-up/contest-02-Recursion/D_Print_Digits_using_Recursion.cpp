#include <bits/stdc++.h>
using namespace std;

#define end '\n'
#define vec vector
#define str string
#define len(a) a.size()
#define slen(s) s.length()
#define gap ' '

void print(int n)
{
    int last = n % 10;
    if (n == 0)
        return;
    print(n / 10);
    cout << last << gap;
}

int32_t main()
{
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);

    int t, n;
    cin >> t;
    while (t--)
    {
        cin >> n;
        if (n == 0)
            cout << 0 << end;
        else
        {
            print(n);
            cout << end;
        }
    }

    return 0;
}
