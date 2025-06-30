#include <bits/stdc++.h>
using namespace std;

#define endn '\n'

int main()
{
    ios_base::sync_with_stdio(false);
    cin.tie(nullptr);

    int a, b, c;
    cin >> a >> b >> c; 
    cout << min(a, min(b, c)) << " ";
    cout << max(a, max(b, c)) << endn;

    return 0;
}
