#include <bits/stdc++.h>
using namespace std;

int main() {
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);

    int t, n;
    cin >> t;
    while (t--) {
        cin >> n;

        if (n > 10) {
            cout << n - 10 << " " << 10 << "\n";
        }
        else {
            cout << 0 << " " << n << "\n";
        }
    }
}
