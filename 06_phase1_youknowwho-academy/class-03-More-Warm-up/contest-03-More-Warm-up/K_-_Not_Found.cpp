#include <bits/stdc++.h>
using namespace std;

#define ed '\n'
#define gp ' '
#define int64 long long int
#define str string
#define vec vector

int32_t main()
{
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);

    str s;
    cin >> s;
    int len = s.length();

    int arr[26];
    memset(arr, -1, sizeof arr);

    for (int i = 0; i < len; i++)
    {
        arr[s[i] - 'a'] = 1;
    }

    for (int i = 0; i < 26; i++)
    {
        // cerr << arr[i] << " ";
        if (arr[i] == -1)
        {
            cout << (char)(i + 'a') << ed;
            return 0;
        }
    }

    cout << "None" << ed;

    return 0;
}
