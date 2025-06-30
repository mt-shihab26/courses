#include <bits/stdc++.h>
using namespace std;

#define endn '\n'

int main()
{
    ios_base::sync_with_stdio(false);
    cin.tie(nullptr);

    char ch;
    cin >> ch;

    if ('A' <= ch && ch <= 'Z')
    {
        cout << char(ch + 32) << endn;
    }
    else
    {
        cout << char(ch - 32) << endn;
    }

    return 0;
}
