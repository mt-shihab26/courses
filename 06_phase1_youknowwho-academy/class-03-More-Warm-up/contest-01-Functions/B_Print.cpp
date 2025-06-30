#include <bits/stdc++.h>
using namespace std;

#define end '\n'
#define vec vector
#define str string
#define len(a) a.size();
#define slen(s) s.length();

void print(int n)
{
    if (n == 1)
    {
        cout << n;
        return;
    }
    print(n - 1);
    cout << " " << n;
}

int32_t main()
{
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);

    int n;
    cin >> n;
    print(n);
    cout << end;

    return 0;
}
