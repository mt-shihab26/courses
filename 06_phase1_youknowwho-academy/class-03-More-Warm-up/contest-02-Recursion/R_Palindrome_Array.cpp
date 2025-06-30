#include <bits/stdc++.h>
using namespace std;

#define end '\n'
#define gap ' '
#define int64 long long int
#define str string
#define vec vector

bool is_palindrome(const vec<int> &a, int i, int j)
{
    if (i >= j)
        return true;
    if (a[i] != a[j])
        return false;
    return is_palindrome(a, i + 1, j - 1);
}

int32_t main()
{
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);

    int n;
    cin >> n;
    vec<int> a(n);
    for (int i = 0; i < n; i++)
        cin >> a[i];

    cout << (is_palindrome(a, 0, n - 1) ? "YES" : "NO") << end;

    return 0;
}
