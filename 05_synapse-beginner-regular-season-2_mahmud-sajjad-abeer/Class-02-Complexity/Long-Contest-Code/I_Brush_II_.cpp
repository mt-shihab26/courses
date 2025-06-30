#include <bits/stdc++.h>
using namespace std;

typedef long long int llint;
typedef unsigned long long int ullint;
typedef short int sint;
typedef unsigned int uint;
#define endn "\n"
#define umap unordered_map
#define uset unordered_set
#define pb push_back

void test() {
    int n, w;
    cin >> n >> w;
    int x, y;
    set<int> y_co;
    for (int i = 0; i < n; i++) {
        cin >> x >> y;
        y_co.insert(y);
    }
    vector<int> ys(y_co.begin(), y_co.end());

    int start = ys[0];
    int len = ys.size(), ct = 1;
    for (int i = 0; i < len; i++) {
        if (start + w < ys[i]) {
            start = ys[i];
            ct++;
        }
    }
    cout << ct << endn;
}

int main(void) {
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);
    
    int t, i = 1;
    cin >> t;
    while (t--) {
        cout << "Case " << i << ": ";
        test();
        i++;
    }
}
// Solved By: shihab4t
// Wednesday, August 04, 2021 | 11:20:43 PM (BST)
