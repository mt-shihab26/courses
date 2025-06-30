#include <bits/stdc++.h>
using namespace std;

typedef long long int llint;
typedef unsigned long long int ullint;
typedef short int sint;
typedef unsigned int uint;
#define endn '\n'
#define umap unordered_map
#define uset unordered_set
#define pb push_back

int erase_sub(string str, string sbstr) {
    int sb_len = sbstr.size();
    int j = str.find(sbstr);
    while (j != string::npos) {
        str.erase(j, sb_len);
        j = str.find(sbstr);
    }
    return str.size();
}

void test() {
    string str;
    cin >> str;
    int len = str.size();
    int ans = 0;
    for (int i = 1; i <= len; i++) {
        if (!erase_sub(str, str.substr(0, i))) {
            cout << i << endn;
            break;
        }
    }
}

int main(void) {
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);
    
    int t;
    cin >> t;
    while (t--) {
        test();
        if (t) cout << endn;
    }
}
