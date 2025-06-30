#include <bits/stdc++.h>
using namespace std;

typedef long long int llint;
#define endn '\n'
#define pb push_back

int main(void) {
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);
    
    llint n;
    vector<double> sq_n;
    while (cin >> n) {
        sq_n.pb(sqrt(n));
    }
    int len = sq_n.size();
    for (int i = len-1; i >= 0; i--) {
        cout << fixed << setprecision(4) << sq_n[i] << endn;
    }

}
// Solved By: shihab4t
// Tuesday, August 17, 2021 | 02:55:50 AM (+06)
