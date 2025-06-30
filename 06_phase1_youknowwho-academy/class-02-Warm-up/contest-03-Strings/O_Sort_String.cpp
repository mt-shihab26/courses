#include <bits/stdc++.h>
using namespace std;

#define _end '\n'
#define _vec vector
#define _str string
#define _len(a) a.size();
#define _slen(s) s.length();

int a[27], n;
char tmp;

int32_t main()
{
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);

    cin >> n;

    for (int i = 0; i < n; i++)
    {
        cin >> tmp;
        a[tmp - 'a']++;
    }

    for (int i = 0; i < 27; i++)
    {
        while (a[i]--)
        {
            cout << char(i + 'a');
        }
    }
    cout << _end;

    return 0;
}