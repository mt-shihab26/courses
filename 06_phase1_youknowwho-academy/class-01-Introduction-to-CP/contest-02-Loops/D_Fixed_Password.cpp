#include <bits/stdc++.h>
using namespace std;

#define endn '\n'

int main()
{
    ios_base::sync_with_stdio(false);
    cin.tie(nullptr);

    int n;

    while (true)
    {
        cin >> n;
        if (n == 1999)
        {
            cout << "Correct" << endn;
            break;
        }
        else
        {
            cout << "Wrong" << endn;
        }
    }

    return 0;
}
