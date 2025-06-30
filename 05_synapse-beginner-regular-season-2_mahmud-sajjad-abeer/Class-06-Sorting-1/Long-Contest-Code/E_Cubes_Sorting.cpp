#include <bits/stdc++.h>
using namespace std;

#define endn '\n'

int main(void) {
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);
    
    int t; cin >> t;
    while (t--) {
        int n; cin >> n;
        vector<int> va(n);
        for (int i = 0; i < n; i++) {
            cin >> va[i];
        }
        bool is_yes = false;
        for (int i = 1; i < n; i++) {
            if (va[i-1] > va[i]) {
                is_yes = true;
            }
            else {
                is_yes = false;
                break;
            }
        }
        if (!is_yes) {
            cout << "YES" << endn;
        }
        else {
            cout << "NO" << endn;
        }

    }
}
// Solved By: shihab4t
// Wednesday, September 01, 2021 | 04:28:55 AM (+06)
