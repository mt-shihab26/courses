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

int memo[32];
int fib(int n)
{
    if (n == 1)
        return 0;
    if (n == 2)
        return 1;
    if (memo[n] != 0)
        return memo[n];
    return fib(n - 1) + fib(n - 2);
}

int32_t main()
{
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);

    i32 n;
    cin >> n;
    cout << fib(n) << end;

    return 0;
}
