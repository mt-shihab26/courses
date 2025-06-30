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
    if (n == 0)
        return;
    print(n - 1);
    cout << n << end;
}

int32_t main()
{
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);

    int n;
    cin >> n;
    print(n);

    return 0;
}
// Shihab Mahamud (github.com/shihab4t)
