#include <bits/stdc++.h>
using namespace std;

#define end '\n'
#define vec vector
#define str string
#define len(a) a.size();
#define slen(s) s.length();

string _to_binary3(int x)
{
    string s = "";
    for (int i = 30; i >= 0; i--)
    {
        if ((x & (1 << i)) != 0)
            s += '1';
        else if (s.size() >= 1)
            s += '0';
    }
    return s;
}

bool is_odd(int n)
{
    return n % 2;
}

bool is_palindrome(int n)
{
    str bn = _to_binary3(n);
    for (int i = 0, j = bn.size() - 1; i < j; i++, j--)
    {
        if (bn[i] != bn[j])
        {
            return false;
        }
    }
    return true;
}

int32_t main()
{
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);

    int n;
    cin >> n;
    cout << (is_odd(n) && is_palindrome(n) ? "YES" : "NO") << end;

    return 0;
}
