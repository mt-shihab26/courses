#include <bits/stdc++.h>
using namespace std;

#define end '\n'
#define vec vector
#define str string
#define len(a) a.size()
#define slen(s) s.length()
#define gap ' '

int32_t main()
{
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);

    int n;
    cin >> n;
    set<int> a;
    int tmp;

    for (int i = 0; i < n; i++)
    {
        cin >> tmp;
        a.insert(tmp);
    }

    cout << a.size() << end;

    return 0;
}
