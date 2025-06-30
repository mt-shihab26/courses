#include <bits/stdc++.h>
using namespace std;

#define endn '\n'
#define vec vector

int32_t main()
{
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);

    int64_t a, b;
    cin >> a >> b;

    cout << (b % a == 0 ? "YES" : "NO") << endn;

    return 0;
}
