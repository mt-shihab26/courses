#include <bits/stdc++.h>
using namespace std;

#define endn '\n'

int main()
{
    ios_base::sync_with_stdio(false);
    cin.tie(nullptr);

    int n;
    cin >> n;
    int last = 0;
    while (n)
    {
        last = n % 10;
        n /= 10;
    }
    cout << (last % 2 ? "ODD" : "EVEN") << endn;

    return 0;
}
