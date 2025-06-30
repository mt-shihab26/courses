#include <bits/stdc++.h>
using namespace std;

#define end '\n'
#define vec vector
#define str string
#define len(a) a.size()
#define slen(s) s.length()
#define gap ' '
#define int32 int
#define int64 long long int

int64 factorial(int n)
{
    if (n <= 1) return 1;
    return n * factorial(n-1);
}

int32 main()
{
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);

    int32 n;
    cin >> n;
    cout << factorial(n) << end;

    return 0;
}
