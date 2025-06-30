#include <bits/stdc++.h>
using namespace std;

#define endn '\n'
#define llint long long int

int main()
{
    ios_base::sync_with_stdio(false);
    cin.tie(nullptr);

    int n;
    cin >> n;

    bool is_prime = true;

    for (int i = 2; i < n; i++)
    {
        if (n % i == 0) 
        {
            cout << "NO" << endn;
            is_prime = false;
            break;
        }
    }

    if (is_prime)
    {
        cout << "YES" << endn;
    }

    return 0;
}
