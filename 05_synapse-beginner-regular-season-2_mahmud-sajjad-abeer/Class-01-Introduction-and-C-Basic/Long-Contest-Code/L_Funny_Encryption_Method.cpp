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

void test() {
    int n;
    cin >> n;
    int n2 = n;
    int a = 0, tmp, tmp_n = n;
    while (n > 0) {
        tmp = n % 2;
        n /= 2;
        a += tmp;
    }
    int b = 0;
    while (n2) {
        tmp = n2 % 10;
        n2 /= 10;
        while (tmp > 0) {
            b += (tmp % 2);
            tmp /= 2;
        }
    }
    cout << a  << " " << b << endn;
}

int main(void) {
    ios_base::sync_with_stdio(false);
    cin.tie(NULL); cout.tie(NULL);

    int t;
    cin >> t;
    while (t--) {
        test();
    }
}