#include <bits/stdc++.h>
using namespace std;

#define endn '\n'

int main()
{
    ios_base::sync_with_stdio(false);
    cin.tie(nullptr);

    int a, b;
    cin >> a >> b;

    if (a % b == 0 || b % a == 0)
    {
        cout << "Multiples\n";
    }
    else
    {
        cout << "No Multiples\n";
    }

    return 0;
}
