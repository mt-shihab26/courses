#include <bits/stdc++.h>
using namespace std;

#define endn '\n'

int main(void) {
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);
    
    int n; string str;
    while (true) {
        cin >> n;
        if (n == 0) return 0;
        cin >> str;
        int len = str.size();
        int step = len / n;
        for (int i = 0, j = step; i < len; i += step, j += step) {
            reverse(str.begin()+i, str.begin()+j);
        }
        cout << str << endn;
    }
}
// Solved By: shihab4t
// Wednesday, August 18, 2021 | 07:33:00 AM (+06)
