#include <bits/stdc++.h>
using namespace std;

#define endn '\n'
#define umap unordered_map
#define pb push_back

bool cmp(pair<char, int> &a, pair<char, int> &b) {
    if (a.second < b.second) return true;
    if (a.second > b.second) return false;
    return a.first > b.first;
}

void test(string &str) {
    umap<char, int> mp;
    int len = str.size();
    for (int i = 0; i < len; i++) {
        mp[str[i]]++;
    }
    vector<pair<char, int>> vc;
    for (auto &v : mp) {
        vc.pb(v);
    }
    sort(vc.begin(), vc.end(), cmp);

    for (auto &v : vc) {
        cout << int(v.first) << " " << v.second << endn;
    }
}

int main(void) {
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);
    
    string str;
    bool ct = false;
    while (getline(cin, str)) {
        if (ct) cout << endn;
        test(str);
        ct = true;
    }
}
// Solved By: shihab4t
// Wednesday, August 18, 2021 | 10:03:40 AM (BST)
