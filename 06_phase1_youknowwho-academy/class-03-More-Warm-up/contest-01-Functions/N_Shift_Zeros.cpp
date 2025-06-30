#include <bits/stdc++.h>
using namespace std;

#define end '\n'
#define vec vector
#define str string
#define len(a) a.size()
#define slen(s) s.length()
#define gap ' '

int32_t main()
{
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);

    int n;
    cin >> n;
    int tmp, zero_count = 0;

    while (n--)
    {
        cin >> tmp;
        if (tmp == 0)
            zero_count++;
        else
            cout << tmp << gap;
    }

    while (zero_count--)
    {
        cout << 0 << gap;
    }

    return 0;
}
