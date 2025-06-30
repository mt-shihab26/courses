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

    llint a[3];
    while (cin >> a[0] >> a[1] >> a[2]) {
        if (a[0] == 0 && a[1] == 0 && a[0] == 0) {
            return 0;
        }
        sort(a, a+3);
        if ((a[0]*a[0]) + (a[1]*a[1]) == (a[2]*a[2])) {
            cout << "right" << endn;
        }
        else {
            cout << "wrong" << endn;
        }
    }
}
