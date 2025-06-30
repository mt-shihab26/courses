#include <bits/stdc++.h>
using namespace std;

#define end '\n'
#define vec vector
#define str string
#define len(a) a.size()
#define slen(s) s.length()
#define gap ' '

void to_binary(int n)
{
    int last = n % 2;
    if (n == 0)
        return;
    to_binary(n / 2);
    cout << last;
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
        to_binary(n);
        cout << end;
    }

    return 0;
}
