#include <bits/stdc++.h>
using namespace std;

#define endn '\n'

int main(void) {
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);
    
    string str;
    list<char> ans;
    list<char>::iterator it;
    while (getline(cin, str)) {
        ans.clear();
        it = ans.begin();
        int len = str.size();
        for (int i = 0; i < len; i++) {
            if (str[i] == '[') {
                it = ans.begin();
            }
            else if (str[i] == ']') {
                it = ans.end();
            }
            else {
                ans.insert(it, str[i]);
            }
        }
        for (auto &v : ans) {
            cout << v;
        }
        cout << endn;
    }
}