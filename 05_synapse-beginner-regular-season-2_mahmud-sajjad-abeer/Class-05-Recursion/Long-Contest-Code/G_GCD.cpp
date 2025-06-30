#include <bits/stdc++.h>
using namespace std;

#define endn '\n'

int test(int t) {
    int G=0, i, j;
    for(i = 1;i < t; i++) {
        for(j= i+1; j <= t; j++)
        {
            G += __gcd(i,j);
        }
    }
    return G;
}

int main(void) {
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);
    
    int t;
    while (cin >> t && t) {
        cout << test(t) << endn;
    }
}
// Solved By: shihab4t
// Tuesday, August 24, 2021 | 12:47:39 AM (+06)
