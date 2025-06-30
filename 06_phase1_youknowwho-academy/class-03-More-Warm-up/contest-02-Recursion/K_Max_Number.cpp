#include <bits/stdc++.h>
using namespace std;

#define end '\n'
#define vec vector
#define str string
#define len(a) a.size()
#define slen(s) s.length()
#define gap ' '

int get_max_num(vec<int> &a, int n)
{
    if (n == 0)
        return a[n];
    return max(a[n], get_max_num(a, n - 1));
}

int32_t main()
{
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);

    int n;
    cin >> n;
    vec<int> a(n);
    for (int i = 0; i < n; i++)
    {
        cin >> a[i];
    }
    cout << get_max_num(a, n - 1) << '\n';

    return 0;
}
