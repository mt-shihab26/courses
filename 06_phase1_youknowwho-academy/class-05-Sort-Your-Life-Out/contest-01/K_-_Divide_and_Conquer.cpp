#include <bits/stdc++.h>
using namespace std;

int main()
{
    ios_base ::sync_with_stdio(false);
    cin.tie(NULL);

    string s = "";
    map<int, string> m;
    for (int i = 0; i < 16; i++)
    {
        char ch = i + 'A';
        string temp = s;
        s += ch;
        s += temp;
        m[i + 1] = s;
    }
    int n;
    cin >> n;
    cout << m[n];

    return 0;
}