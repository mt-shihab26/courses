#include <bits/stdc++.h>
using namespace std;

typedef long long int llint;
typedef unsigned long long int ullint;
typedef short int sint;
#define endn "\n"
#define umap unordered_map
#define uset unordered_set
#define pb push_back

int main(void) {
    ios_base::sync_with_stdio(false);
    cin.tie(NULL); cout.tie(NULL);

    char c;
    bool is = true;
    while (scanf("%c", &c) != EOF) {
        if (c == '"') {
            if (is) {
                cout << "``";
                is = false;
            }
            else {
                cout << "''";
                is = true;
            }
        }
        else {
            cout << c;
        }
    }
}
// Solved By: shihab4t
// Tuesday, August 03, 2021 | 03:06:42 PM (+06)
// Accepted: 03:19:14 PM (+06)
