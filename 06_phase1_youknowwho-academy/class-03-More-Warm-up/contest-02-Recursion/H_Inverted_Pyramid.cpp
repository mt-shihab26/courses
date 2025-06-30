#include <bits/stdc++.h>
using namespace std;

#define end '\n'
#define vec vector
#define str string
#define len(a) a.size()
#define slen(s) s.length()
#define gap ' '

void print(int n, int fn)
{
    if (n == 0)
        return;
    print(n - 1, fn + 2);
    for (int i = 0; i < n - 1; i++)
        cout << gap;
    for (int i = 0; i < fn; i++)
        cout << "*";
    cout << end;
}

int32_t main()
{
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);

    int n;
    cin >> n;

    print(n, 1);

    return 0;
}
