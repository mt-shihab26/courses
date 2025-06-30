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
    
    string str, mas;
    getline(cin, str);
    int len = str.size()-1, i;
    while (true) {
        getline(cin, str);
        if (str == "___________") break;
        mas = "";
        for (i = 1; i < len; i++) {
            if (str[i] == 'o') {
                mas += '1';
            }
            else if (str[i] == ' ') {
                mas += '0';
            }
        }
        auto tm_mas = stoull(mas, nullptr, 2);
        cout << char(tm_mas);
    }
}
// Solved By: shihab4t
// Monday, August 16, 2021 | 02:26:51 PM (+06)
// Accepted: 02:48:53 PM (+06)
