#include <bits/stdc++.h>
using namespace std;

#define endn '\n'
#define llint long long int

int gcd(int a, int b)
{
    int tmp;
    while (true)
    {
        if (b == 0)
            return a;
        tmp = a;
        a = b;
        b = tmp % b;
    }
    // O(log n)
}

int main()
{
    ios_base::sync_with_stdio(false);
    cin.tie(nullptr);

    int a, b;
    cin >> a >> b;
    cout << gcd(a, b) << endn;

    return 0;
}
