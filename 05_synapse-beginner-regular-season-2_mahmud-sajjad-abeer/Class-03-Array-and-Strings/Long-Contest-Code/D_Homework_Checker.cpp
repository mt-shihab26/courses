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
    string str;
    int x, y;
    char op, eq;
    string va;
    int ct = 0;
    while (cin >> str) {
        stringstream is(str);
        is >> x >> op >> y >> eq >> va;
        if (va != "?") {
            if (op == '+' && x + y == stoi(va)) {
                ct++;
            }
            else if (op == '-' && x - y == stoi(va)) {
                ct++;
            }
        }
    }
    cout << ct << endn;
}