#include <bits/stdc++.h>
using namespace std;

typedef long long int llint;
#define endn '\n'

bool is_palindrome(llint n) {
    string str = to_string(n);
    int len = str.size();
    for (int i = 0, j = len-1; i < j; i++, j--) {
        if (str[i] != str[j]) {
            return false;
        }
    }
    return true;
}

llint rev_num(llint n) {
    llint num = 0;
    while (n) {
        num = (num * 10) + (n % 10);
        n /= 10;
    }
    return num;
}

void test() {
    llint n;
    cin >> n;
    int ct = 0;
    while (!is_palindrome(n)) {
        n += rev_num(n);
        ct++;
    }
    cout << ct << " " << n << endn;
}

int main(void) {
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);
    
    int t;
    cin >> t;
    while (t--) {
        test();
    }
}
// Solved By: shihab4t
// Tuesday, August 17, 2021 | 02:30:10 AM (+06)
