#include <bits/stdc++.h>
using namespace std;

typedef long long int llint;
typedef unsigned long long int ullint;
typedef short int sint;
#define endn "\n"
#define umap unordered_map
#define uset unordered_set
#define pb push_back

int a[102][102];

int main(void) {
    ios_base::sync_with_stdio(false);
    cin.tie(NULL); cout.tie(NULL);

    int n, m, fct = 1;
    while (true) {
        cin >> n >> m;

        if (fct != 1 && n != 0 && m != 0) {
            cout << endn;
        }
        
        if (n == 0 && m == 0)
            return 0;
        int i, j;

        for (i = 0; i <= n+1; i++) {
            for (j = 0; j <= m+1; j++) {
                a[i][j] = 0;
            }
        }
        
        char tmp;
        for (i = 1; i <= n; i++) {
            for (j = 1; j <= m; j++) {
                cin >> tmp;
                if (tmp == '*') {
                    a[i][j] = -1;
                }
            }
        }

        int ct;
        for (i = 1; i <= n; i++) {
            for (j = 1; j <= m; j++) {
                if (a[i][j] != -1) {
                    ct = 0;
                    if (a[i+1][j] == -1) ct++;
                    if (a[i+1][j+1] == -1) ct++;
                    if (a[i][j+1] == -1) ct++;
                    if (a[i-1][j+1] == -1) ct++;
                    if (a[i-1][j] == -1) ct++;
                    if (a[i-1][j-1] == -1) ct++;
                    if (a[i][j-1] == -1) ct++;
                    if (a[i+1][j-1] == -1) ct++;
                    a[i][j] += ct;
                }
            }
        }

        cout << "Field #" << fct << ":\n";
        for (i = 1; i <= n; i++) {
            for (j = 1; j <= m; j++) {
                if (a[i][j] == -1) {
                    cout << '*';
                }
                else {  
                    cout << a[i][j];
                }
            }
            cout << endn;
        }
        fct++;
    }
}
// Solved By: shihab4t
// Tuesday, August 03, 2021 | 01:59:10 AM (+06)
// Accepted: 02:50 AM (+6);
