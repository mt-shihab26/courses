#include <bits/stdc++.h>
using namespace std;

#define endn '\n'
inline void first_io(void) {ios_base::sync_with_stdio(false);cin.tie(NULL);}

int main(void) {
    first_io();

    int t, i;
    string english, bytelan = "abcdefghijklmnopqrstuvwxyz";
    cin >> t >> english;
    int len = english.length();
    map<char, char> mp;
    for (i = 0; i < len; i++) {
        mp[bytelan[i]] = english[i];
    }
    string instr;
    char tmp;
    while (t--) {
        cin >> instr;
        len = instr.length();
        for (i = 0; i < len; i++) {
            if (instr[i] == '_') {
                cout << " ";
            } else if (instr[i] >= 'A' && instr[i] <= 'Z') {
                cout << char(mp[(instr[i]+32)] - 32);
            } else {
                tmp = mp[instr[i]];
                if (tmp == 0) {
                    cout << instr[i];
                } else {
                    cout << char(tmp);
                }
            }
        }
        cout << endn;
    }

}
// Solved By: shihab4t
// Tuesday, September 21, 2021 | 11:51:46 AM (+06)
