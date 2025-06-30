#include <bits/stdc++.h>
using namespace std;

#define end '\n'
#define vec vector
#define str string
#define len(a) a.size()
#define slen(s) s.length()
#define gap ' '

void print(vec<int> &a, int i, int n)
{
    if (i > n)
        return;
    print(a, i + 2, n);
    cout << a[i] << " ";
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
    print(a, 0, n - 1);
    cout << end;

    return 0;
}
