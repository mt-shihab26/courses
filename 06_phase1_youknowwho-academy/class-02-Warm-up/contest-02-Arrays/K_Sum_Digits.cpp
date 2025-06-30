#include <bits/stdc++.h>
using namespace std;

#define _end '\n'
#define _vec vector
#define _str string
#define _len(a) a.size();

int32_t main()
{
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);

    int n;
    cin >> n;
    _str num;
    cin >> num;

    int sum = 0;
    for (int i= 0; i < n; i++)
    {
        sum += num[i] - '0';
    }

    cout << sum << _end;

    return 0;
}
