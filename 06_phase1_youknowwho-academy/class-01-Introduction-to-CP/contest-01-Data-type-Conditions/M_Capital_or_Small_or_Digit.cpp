#include <bits/stdc++.h>
using namespace std;

#define endn '\n'

int main()
{
    ios_base::sync_with_stdio(false);
    cin.tie(nullptr);

    char ch;
    cin >> ch;

    if ('0' <= ch && ch <= '9')
    {
        cout << "IS DIGIT\n";
    }
    else
    {
        cout << "ALPHA" << endn;
        if ('A' <= ch && ch <= 'Z')
        {
            cout << "IS CAPITAL" << endn;
        }
        else
        {
            cout << "IS SMALL" << endn;
        }
    }

    return 0;
}
