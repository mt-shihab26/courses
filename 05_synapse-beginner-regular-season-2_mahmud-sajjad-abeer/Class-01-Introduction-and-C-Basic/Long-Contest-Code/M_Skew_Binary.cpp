#include <bits/stdc++.h>
using namespace std;

typedef long long int llint;
typedef unsigned long long int ullint;
typedef short int sint;
#define endn "\n"
#define umap unordered_map
#define uset unordered_set
#define pb push_back
template<typename tem>
void print_vector(vector<tem> &vec) {
for (auto &ele : vec) cout<<ele<<" ";
cout << "\n";}

int main(void) {
    ios_base::sync_with_stdio(false);
    cin.tie(NULL); cout.tie(NULL);

    string skew;
    int i, len, pw, x;
    llint decimal;
    while (cin >> skew) {
        if (skew == "0") {
            return 0;
        }
        len = skew.length();
        pw = 1;
        decimal = 0;
        for (i = len-1; i >= 0; i--) {
            if (skew[i] == '0') {
                pw++;
            }
            else {
                x = skew[i] - '0';
                decimal += (x * (pow(2, pw) -1));
                pw++;
            }
        }
        cout << decimal << endn;
    }
}