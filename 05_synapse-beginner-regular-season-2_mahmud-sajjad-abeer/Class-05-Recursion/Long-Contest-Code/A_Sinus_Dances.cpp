#include <bits/stdc++.h>
using namespace std;

#define endn '\n'

void a(int i, int n) {
    cout << "sin(" << i;
    if (i < n) {
        cout << (i % 2 ? "-" : "+");
        a(i+1, n);
    }
    cout << ")";
}

void s(int i, int n) {
    cout << "(";
    if (i > 1) {
        s(i-1, n+1);
    }
    a(1, i); cout << "+" << n << ")";
}

int main(void) {
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);
    
    int n;
    cin >> n;
    if (n > 1) {
        s(n-1, 2);
    }
    a(1, n);
    cout << "+1" << endn; 
}
// Solved By: shihab4t
// Tuesday, August 24, 2021 | 01:18:11 AM (+06)
