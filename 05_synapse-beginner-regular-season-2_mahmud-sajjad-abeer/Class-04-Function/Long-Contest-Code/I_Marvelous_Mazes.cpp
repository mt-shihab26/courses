#include <bits/stdc++.h>
using namespace std;

#define endn '\n'

int main(void) {
    string str;
    char ch, ch1;
    int tm = 0;
    bool is_ex = false;
    while (scanf("%c", &ch) != EOF) {
        if (ch >= '0' && ch <= '9') {
            tm += (ch - '0');
            is_ex = false;
        }
        else if (ch >= 'A' && ch <= 'Z' || ch == '*' || ch == 'b') {
            if (ch == 'b') ch = ' ';
            for (int i = 0; i < tm; i++)
                cout << ch;
            tm = 0;
            is_ex = false;
        }
        else if (ch == '!') {
            cout << endn;
            tm = 0;
            is_ex = true;
        }
        else if (ch == '\n') {
            if (is_ex)
                is_ex = false;
            else
                cout << endn;
        }
    }
}
// Solved By: shihab4t
// Tuesday, August 17, 2021 | 12:24:50 PM (+06)
// Accepted: 01:01:10 PM (+06)
