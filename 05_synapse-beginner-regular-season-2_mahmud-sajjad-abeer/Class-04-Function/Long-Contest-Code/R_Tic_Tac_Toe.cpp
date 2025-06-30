#include <bits/stdc++.h>
using namespace std;

#define endn '\n'

int win_count(char chal[3][3], char ch) {
    if (chal[0][0] == ch && chal[0][1] == ch && chal[0][2] == ch) return true;
    if (chal[1][0] == ch && chal[1][1] == ch && chal[1][2] == ch) return true;
    if (chal[2][0] == ch && chal[2][1] == ch && chal[2][2] == ch) return true;
    if (chal[0][0] == ch && chal[1][0] == ch && chal[2][0] == ch) return true;
    if (chal[0][1] == ch && chal[1][1] == ch && chal[2][1] == ch) return true;
    if (chal[0][2] == ch && chal[1][2] == ch && chal[2][2] == ch) return true;
    if (chal[0][0] == ch && chal[1][1] == ch && chal[2][2] == ch) return true;
    if (chal[0][2] == ch && chal[1][1] == ch && chal[2][0] == ch) return true;
    return false;
}

void test() {
    char chal[3][3];
    int ct_o = 0, ct_x = 0, total;
    for (int i = 0; i < 3; i++) {
        for (int j = 0; j < 3; j++) {
            cin >> chal[i][j];
            if (chal[i][j] == 'O') ct_o++;
            else if (chal[i][j] == 'X') ct_x++;
        }
    }
    bool ans = true;
    if (ct_o == ct_x) {
        if (win_count(chal, 'X')) {
            ans = false;
        }
    }
    else if (ct_o + 1 == ct_x) {
        if (win_count(chal, 'O')) {
            ans = false;
        }
    }
    else {
        ans = false;
    }

    if (ans) cout << "yes" << endn;
    else cout << "no" << endn;
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
// Monday, August 23, 2021 | 11:21:28 AM (+06)
