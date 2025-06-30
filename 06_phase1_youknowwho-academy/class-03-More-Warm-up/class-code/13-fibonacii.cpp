#include <bits/stdc++.h>
using namespace std;

int64_t memo[55];
int64_t fib(int64_t n)
{
    if (n <= 1)
        return n;
    if (memo[n] == -1)
        memo[n] = fib(n - 1) + fib(n - 2);
    return memo[n];
}

int main()
{
    memset(memo, -1, sizeof memo);
    int64_t n = 50;
    cout << fib(n) << "\n";
}