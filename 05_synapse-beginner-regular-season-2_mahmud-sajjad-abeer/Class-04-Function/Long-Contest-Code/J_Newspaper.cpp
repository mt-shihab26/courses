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

void test() {
    int k, m;
    cin >> k;
    double sum = 0;
    umap<char, int> mp;
    char ch;
    double value;
    while (k--) {
        cin >> ch >> value;
        mp[ch] = value;
    }
    cin >> m;
    cin.ignore();
    string line_str;
    int len, i, j;
    while (m--) {
        getline(cin, line_str);
        len = line_str.length();
        for (i = 0; i < len; i++) {
            sum += mp[line_str[i]];
        }
    }
    sum /= 100;
    cout << fixed << setprecision(2) << sum << "$" << endn;
}

int main(void) {
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);

    int t;
    cin >> t;
    while (t--) {
        test();
    }
}