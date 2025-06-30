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
    if (n == 1) return;
    cout << n << " ";
    print(n - 1);
}

int32_t main()
{
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);

    int n;
    cin >> n;
    print(n);
    cout << 1 << end;

    return 0;
}
