#include <bits/stdc++.h>
using namespace std;

#define endn '\n'

int main()
{
    ios_base::sync_with_stdio(false);
    cin.tie(nullptr);

    string f1, s1, f2, s2;
    cin >> f1 >> s1 >> f2 >> s2;

    if (s1 == s2)
    {
        cout << "ARE Brothers\n";
    }
    else
    {
        cout << "NOT\n";
    }

    return 0;
}
