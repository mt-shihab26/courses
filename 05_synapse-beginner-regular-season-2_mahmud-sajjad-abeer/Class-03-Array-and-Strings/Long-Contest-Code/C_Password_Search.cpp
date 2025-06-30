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

int main(void) {
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);
    

    int n;
    string str;
    while (cin >> n >> str) {
        map<string, int> mp;
        
        int len = str.size() - n;
        for (int i = 0; i <= len; i++) {
            mp[str.substr(i, n)]++;
        }
        auto it = mp.begin();
        string ans;
        auto mp_end = mp.end();
        int mx_value = 0;
        while (it != mp_end) {
            if (it->second > mx_value) {
                mx_value = it->second;
                ans = it->first;
            }
            it++;
        }
        cout << ans << endn;
    }
}
