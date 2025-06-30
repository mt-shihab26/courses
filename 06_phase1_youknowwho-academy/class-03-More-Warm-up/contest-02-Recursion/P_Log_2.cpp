#include <bits/stdc++.h>
using namespace std;

#define end '\n'
#define gap ' '
#define i32 int
#define i64 long long int
#define f32 float
#define f64 double
#define bol bool
#define chr char
#define str string
#define vec vector

int ct(i64 n)
{
    if (n == 1)
        return 0;
    cerr << n << gap;
    return 1 + ct(n / 2);
}

int32_t main()
{
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);

    i64 n;
    cin >> n;
    cout << ct(n) << end;

    return 0;
}
