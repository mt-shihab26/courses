#include <bits/stdc++.h>
using namespace std;

#define endn '\n'

void counting_sort_str(string &str) {
    int i, j, len = str.size();
    int count[300] = {0};
    for (i = 0; i < len; i++) {
        count[str[i]]++;
    }
    for (i = 1; i < 300; i++) {
        count[i] += count[i-1];
    }
    string tmp(str);
    for (i = 0; i < len; i++) {
        tmp[count[str[i]]-1] = str[i];
        count[str[i]]--;
    }
    for (i = 0; i < len; i++) {
        str[i] = tmp[i];
    }
}

string mn_str(const string &s) {
    string tmp(s);
    tmp.erase(remove(tmp.begin(), tmp.end(), ' '), tmp.end());
    counting_sort_str(tmp);
    return tmp;
}

int main(void) {
    int t;
    cin >> t;
    cin.ignore();
    cin.ignore();
    while (t--) {
        string s;
        vector<string> words;
        while (getline(cin, s) && s != "")
            words.push_back(s);
        sort(words.begin(), words.end());
        int i, j, len = words.size();
        for (i = 0; i < len; i++) {
            for (j = i+1; j < len; j++) {
                if (mn_str(words[i]) == mn_str(words[j])) {
                    cout << words[i] << " = " << words[j] << endn;
                }
            }
        }
        if (t) cout << endn;
    }
}
// Solved By: shihab4t
// Monday, September 06, 2021 | 12:15:14 PM (+06)