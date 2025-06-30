#include <bits/stdc++.h>
using namespace std;

typedef long long int llint;
typedef unsigned long long int ullint;
typedef short int sint;
#define endn "\n"
#define umap unordered_map
#define uset unordered_set
#define pb push_back

int main(void) {
    ios_base::sync_with_stdio(false);
    cin.tie(NULL); cout.tie(NULL);

    string all_str = "`1234567890-=QWERTYUIOP[]\\ASDFGHJKL;'ZXCVBNM,./";
    umap<char, int> all_mp;
    for (int i = 0; i < all_str.size(); i++)
        all_mp[all_str[i]] = i;

    char c;
    while (scanf("%c", &c) != EOF) {
        if (c == ' ' || c == '\n')
            cout << c;
        else 
            cout << all_str[all_mp[c]-1];
    }
}
// Solved By: shihab4t
// Tuesday, August 03, 2021 | 04:37:36 AM (+06)
// Accepted: 05:11:51 AM (+06)
