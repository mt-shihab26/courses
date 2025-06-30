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
    
    int t;
    cin >> t;
    int x, y, j, i, tmp;
    for (i = 0; i < t; i++) {
        if (i) cout << endn;

        cin >> x >> y;
        while (y--) {
            for (j = 1; j <= x; j++) {
                tmp = j;
                while (tmp--) cout << j;
                cout << endn;
            }
            for (j = x-1; j >= 1; j--) {
                tmp = j;
                while (tmp--) cout << j;
                cout << endn;
            }

            if (y) cout << endn;
        }
    }
}