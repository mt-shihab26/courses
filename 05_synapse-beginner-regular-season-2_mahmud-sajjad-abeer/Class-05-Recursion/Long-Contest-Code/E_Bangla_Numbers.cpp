#include <bits/stdc++.h>
using namespace std;

typedef long long int llint;
#define endn '\n'

void ot(llint n) {
    if (n <= 0) return; 
    llint tmp = n % 10000000; n /= 10000000;
    ot(n);
    string str;
    int tmp2 = tmp % 100;
    if (tmp2) str = " " + to_string(tmp2);
    tmp /= 100;
    if (tmp > 0) {
        tmp2 = tmp % 10;
        if (tmp2) str = " " + to_string(tmp2) + " shata" + str;
        tmp /= 10;
    }
    if (tmp > 0) {
        tmp2 = tmp % 100;
        if (tmp2) str = " " + to_string(tmp2) + " hajar" + str;
        tmp /= 100;
    }
    if (tmp > 0) {
        tmp2 = tmp % 100; 
        if (tmp2) str = " " + to_string(tmp2) + " lakh" + str;
        tmp /= 100;
    }
    if (n > 0) {
        str = " kuti" + str;
    }
    cout << str;
}

int main(void) {
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);
    
    llint n;
    int i = 1;
    while (cin >> n) {
        cout << setfill(' ') << setw(4) << i << ".";
        if (n == 0) cout << " 0";
        ot(n);
        cout << endn;
        i++;
    }
}
// Solved By: shihab4t
// Tuesday, August 24, 2021 | 02:50:10 AM (+06)
