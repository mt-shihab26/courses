#include <bits/stdc++.h>
using namespace std;

typedef long long int llint;
typedef unsigned long long int ullint;
typedef short int sint;
#define endn "\n"
#define umap unordered_map
#define uset unordered_set
#define pb push_back
template<typename tem>
void print_vector(vector<tem> &vec) {
for (auto &ele : vec) cout<<ele<<" ";
cout << "\n";}

void test() {
    int s, d;
    cin >> s >> d;
    if (s < d) {
        cout << "impossible" << endn;
        return;
    }
    int x = (s + d) / 2;
    int y = s - x;
    
    if (x + y == s && abs(x - y) == d) {
        cout << max(x, y) << " " << min(x, y) << endn;
    }
    else {
        cout << "impossible" << endn;
    }
}

int main(void) {
    ios_base::sync_with_stdio(false);
    cin.tie(NULL); cout.tie(NULL);

    int t;
    cin >> t;
    while (t--) {
        test();
    }
}
// Solved By: shihab4t
// Tuesday, August 03, 2021 | 04:05:01 AM (+06)
// Accepted: 04:28:25 AM (+06)
