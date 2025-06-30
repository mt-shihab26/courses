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

bool is_value_char(char ch) {
    if (ch >= 'a' && ch <= 'z')
        return true;
    if (ch >= 'A' && ch <= 'Z')
        return true;
    return false;
}

int main(void) {
    string str = "";
    int i, ct, len;
    while(getline(cin, str)) {
        i = 0, ct = 0;
        len = str.length();
        while (i < len) {
            if (is_value_char(str[i])) {
                i++;
                while (is_value_char(str[i]) && i < len) {
                    i++;
                }
                ct++;
            }
            else {
                i++;
                while (is_value_char(str[i]) == false && i < len) {
                    i++;
                }
            }
        }
        if (ct != 0) {
            cout << ct << endn;
        }
    }
}