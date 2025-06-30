#include <bits/stdc++.h>
using namespace std;

#define endn '\n'
#define pb push_back

void test() {
    int n, tmp;
    cin >> n;
    int sz = n;
    vector<int> point;
    while (n--) {
        cin >> tmp;
        point.pb(tmp);
    }
    int sum, ans = 0;
    int mn = INT_MAX;
    for (int i = 0; i < sz; i++) {
        sum = 0;
        for (int j = 0; j < sz; j++) {
            sum += abs(point[i] - point[j]);
        }
        mn = min(sum, mn);
    }
    cout << mn << endn;
}

int main(void) {
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);
    
    int t;
    cin >> t;
    while (t--) {
        test();
    }
}
// Solved By: shihab4t
// Thursday, August 19, 2021 | 12:14:57 PM (+06)
