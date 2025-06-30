#include <bits/stdc++.h>
using namespace std;

typedef long long int llint;
typedef unsigned long long int ullint;
typedef short int sint;
typedef unsigned int uint;
#define endn '\n'
#define umap unordered_map
#define uset unordered_set
#define pb push_back

int main(void) {
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);
    
    int n;
    cin >> n;
    vector<int> va;
    int tmp;
    va.pb(0);
    while (n--) {
        cin >> tmp;
        va.pb(tmp+va.back());
    }
    int q, i, j;
    cin >> q;
    while (q--) {
        cin >> i >> j;
        i++, j++;
        cout << va[j] - va[i-1] << endn;
    }
}
// Solved By: shihab4t
// Tuesday, August 10, 2021 | 03:19:04 AM (BST)

