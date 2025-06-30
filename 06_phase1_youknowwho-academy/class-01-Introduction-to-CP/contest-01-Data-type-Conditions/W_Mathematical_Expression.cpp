#include <bits/stdc++.h>
using namespace std;

#define endn '\n'

int main()
{
    ios_base::sync_with_stdio(false);
    cin.tie(nullptr);

    int a, b, c;
    string s, q;
    cin >> a >> s >> b >> q >> c;

    string ans;

    // cout << a << endn;

    // cout << s << endn;

    if (s == "+")
    {
        if (a + b == c)
            cout << "Yes" << endn;
        else
            cout << a + b << endn;
    }
    else if (s == "-")
    {
        if (a - b == c)
            cout << "Yes" << endn;
        else
            cout << a - b << endn;
    }
    else if (s == "*")
    {
        if (a * b == c)
            cout << "Yes" << endn;
        else
            cout << a * b << endn;
    }

    return 0;
}
