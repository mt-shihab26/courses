#include <bits/stdc++.h>
using namespace std;

#define endn '\n'

void make_lower_case(string &str) {
    for (auto &ith : str) {
        if (ith >= 'A' && ith <= 'Z')
            ith += 32; 
    }
}

bool is_anagram(const string &str, const string &str2) {
    int len = str.length(), len2 = str2.length();
    if (len != len2) return false;

    map<char, int> mp, mp2;
    for (int i = 0; i < len; i++)
        mp[str[i]]++, mp2[str2[i]]++;

    auto it = mp.begin(), mp_end = mp.end(), it2 = mp2.begin();
    while (it != mp_end) {
        if (it->first != it2->first || it->second != it2->second)
            return false;
        it++, it2++;
    }
    return true;
}

int main(void) {
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);
    
    string str;
    vector<string> words, bs_words;
    while (true) {
        cin >> str;
        if (str == "#") break;
        words.push_back(str);
        make_lower_case(str);
        bs_words.push_back(str);
    }

    vector<string> annagrams;
    bool flag[200] = {false};
    for (int i = 0; i < bs_words.size(); i++) {
        if (flag[i] == false) {
            bool ct = true;
            for (int j = i+1; j < bs_words.size(); j++) {
                if (flag[j] == 0) {
                    if (is_anagram(bs_words[i], bs_words[j])) {
                        flag[i] = true;
                        flag[j] = true;
                        ct = false;
                    }
                }
            }
            if (ct) annagrams.push_back(words[i]);
        }
    }

    sort(annagrams.begin(), annagrams.end());

    for (string &ith_str : annagrams) {
        cout << ith_str << endn;
    }
}
// Solved By: shihab4t
// Monday, September 06, 2021 | 03:27:42 PM (+06)