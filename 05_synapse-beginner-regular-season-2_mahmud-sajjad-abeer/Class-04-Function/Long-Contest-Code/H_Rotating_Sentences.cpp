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
    
    string str[100+2];
    int i = 0, len_max = 0, len;
    while (getline(cin, str[i])) {
        len = str[i].length();
        if (len > len_max) {
            len_max = len;
        }
        i++;
    }
    int ar_len = i;
    for (int i = 0; i < len_max; i++) {
        for (int j = ar_len-1; j >= 0; j--) {
            if (str[j].size() > i)
                cout << str[j][i];
            else {
                cout << " ";
            }
        }
        cout << endn;
    }    
}
