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
    
    string s, t;
    while (cin >> s >> t) {
        int t_len = t.length(), s_len = s.length();
        int j = 0;
        for (int i = 0; i < t_len; i++) {
            if (s[j] == t[i]) {
                j++;
            }
        }
        cout << (j == s_len ? "Yes" : "No") << endn;
    }
}