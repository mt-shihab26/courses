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
    string str;
    cin >> str;
    int score = 0;
    int len = str.length();
    for (int i = 0; i < len; i++) {
        if (str[i] == 'O') {
            score += 1;
            int k = 2;
            i++;
            while (str[i] == 'O' && i < len) {
                score += k;
                k++; i++;
            }
        }
    }
    cout << score << endn;
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