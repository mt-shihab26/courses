#include <bits/stdc++.h>
using namespace std;

int main()
{
    string n;
    cin >> n;

    int len = 4 - n.size();

    for (int i = 0; i < len; i++)
    {
        n = "0" + n;
    }

    cout << n << "\n";
}