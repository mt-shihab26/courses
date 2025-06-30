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
    llint n, m;
    cin >> n >> m;
    llint minus_a = -1;
    llint first_minus = ((((2*minus_a) + ((m-1)*(-1))) * m) / 2);
    minus_a -= (m*2);
    llint second_minus = ((((2*minus_a) + ((m-1)*(-1))) * m) / 2);
    llint dif = second_minus - first_minus;
    llint x = (n / (2*m));
    llint sum = (((2*first_minus) + ((x-1) * dif)) * x) / 2;

    llint first_plus = (((2*(m+1)) + (m-1)) * m) / 2;
    dif = -dif;
    sum += ((((2*first_plus) + ((x-1) * dif)) * x) / 2);

    cout << sum << endn;
}

int main(void) {
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);
    
    int t;
    cin >> t;
    int i = 1;
    while (t--) {
        cout << "Case " << i << ": ";
        i++;
        test();
    }
    // O(t);
}
// Solved By: shihab4t
// Wednesday, August 11, 2021 | 03:19:07 AM (+06)
// Accepted: 04:17:20 AM (+06)
