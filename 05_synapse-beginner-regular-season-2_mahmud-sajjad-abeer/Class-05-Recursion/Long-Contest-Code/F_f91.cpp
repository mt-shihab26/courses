#include <bits/stdc++.h>
using namespace std;

#define endn '\n'

int f91(int n) {
    if (n >= 101) return n - 10;
    return f91(f91(n+11));
}

int main(void) {
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);
    
    int n;
    while (cin >> n && n) {
        cout << "f91(" << n << ") = " << f91(n) << endn;
    }
}
// Solved By: shihab4t
// Tuesday, August 24, 2021 | 12:37:57 AM (+06)
