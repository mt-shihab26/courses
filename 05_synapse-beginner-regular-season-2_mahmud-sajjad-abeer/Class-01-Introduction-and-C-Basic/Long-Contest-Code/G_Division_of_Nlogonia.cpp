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

    int t, x, y, a , b;
    while (cin >> t) {
        if (t == 0) {
            return 0;
        }
        cin >> x >> y;
        while (t--) {
            cin >> a >> b;
            if (a == x || b == y) {
                cout << "divisa" << endn;
            }
            else if (a > x && b > y){
                cout << "NE" << endn;
            }
            else if (a < x && b > y) {
                cout << "NO" << endn;
            }
            else if (a < x && b < y) {
                cout << "SO" << endn;
            }
            else {
                cout << "SE" << endn;
            }
        }
    }
}