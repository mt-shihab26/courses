#include <bits/stdc++.h>
using namespace std;

typedef long long int llint;
#define endn '\n'

llint f(llint n) {
    if (n < 10) {
        return n;
    }
    llint sum = 0;
    while (n) {
        sum += n % 10;
        n /= 10;
    }
    return f(sum);
}

int main(void) {
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);
    
    llint n;
    while (true) {
        cin >> n;
        if (n == 0) return 0;
        cout << f(n) << endn;
    }
}
// Solved By: shihab4t
// Tuesday, August 17, 2021 | 02:19:28 AM (+06)
// Accepted: 02:26:02 AM (+06)
