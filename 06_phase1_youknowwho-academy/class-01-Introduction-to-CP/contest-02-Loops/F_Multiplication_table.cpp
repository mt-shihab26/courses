#include <bits/stdc++.h>
using namespace std;

#define endn '\n'

int main()
{
    ios_base::sync_with_stdio(false);
    cin.tie(nullptr);

    int n;
    cin >> n;

    for (int i = 1; i <= 12; i++) {
        cout << n << " * " << i << " = " << i * n << endn;
    }

    return 0;
}
