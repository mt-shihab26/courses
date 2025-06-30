#include <bits/stdc++.h>
using namespace std;

#define end '\n'
#define vec vector
#define str string
#define len(a) a.size()
#define slen(s) s.length()
#define gap ' '

int count_vowels(str s, int i, int n)
{
    if (i >= n)
        return 0;
    int tmp = 0;
    if (s[i] >= 'A' && s[i] <= 'Z')
        s[i] += 32;
    if (s[i] == 'a' || s[i] == 'e' || s[i] == 'i' || s[i] == 'o' || s[i] == 'u')
    {
        tmp = 1;
        cerr << s[i] << " ";
    }
    return tmp + count_vowels(s, i + 1, n);
}

int32_t main()
{
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);

    str s;
    getline(cin, s);

    cout << count_vowels(s, 0, s.length()) << end;

    return 0;
}
