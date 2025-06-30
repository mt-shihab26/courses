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
    string big_num;
    cin >> big_num;
    llint divi;
    cin >> divi;
    int len = big_num.size();
    llint rem = 0; 
    for (int i = 0; i < len; i++) {
        rem = stoll(to_string(rem)+big_num[i]);
        rem = rem % divi;
    }
    if (rem == 0) {
        cout << "divisible" << endn;
    }
    else {
        cout << "not divisible" << endn;
    }
}

int main(void) {
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);
    
    int t, i = 1;
    cin >> t;
    while (t--) {
        cout << "Case " << i << ": ";
        test();
        i++;
    }
}
// Solved By: shihab4t
// Thursday, August 12, 2021 | 01:26:04 AM (BST)
