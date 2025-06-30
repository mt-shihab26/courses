#include <bits/stdc++.h>
using namespace std;

typedef long long int llint;
#define endn '\n'

void test() {
    int n; cin >> n;
    vector<llint> va(n);
    for (int i = 0; i < n; i++) {
        cin >> va[i];
    }
    llint ans = 0;
    for (int i = n-1; i >= 1; i--) {
        if (va[i] < va[i-1]) {
            ans += (va[i-1] - va[i]);
        }
    }
    cout << ans << endn;
}

int main(void) {
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);
    
    int t; cin >> t;
    while (t--) {
        test();
    }
}
// Solved By: shihab4t
// Friday, August 20, 2021 | 07:03:40 AM (+06)
