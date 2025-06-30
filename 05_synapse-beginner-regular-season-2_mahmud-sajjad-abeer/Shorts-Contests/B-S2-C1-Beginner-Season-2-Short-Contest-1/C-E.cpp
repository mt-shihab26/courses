#include <bits/stdc++.h>
using namespace std;
// Macros
typedef long long int lli;
typedef long double ld;
#define endn "\n"
// Functions
// print vector all element in one line
template <typename T> void print_vector(vector<T> &vac) {
for (int ele: vac) cout << ele << " "; cout << endn;}

// Solve
void test(void) {
    int n;
    cin >> n;

    vector<int> firend(n);
    for (int i = 1 ; i <= n; i++) {
        cin >> firend[i-1];
    }

    vector<int> result(n);
    int j;
    for (int i = 1; i <= n; i++) {
        result[firend[i-1]-1] = i;
    }

    print_vector(result);

    // Approach
    // 1 2 3 4 // indx
    // 2 3 4 1 // firend
    // 4 1 2 3 // output
}

int main(void) {
    test();
    return 0;
}
// By Shihab Mahamud
// Date: Monday, June 07, 2021 | 10:17:17 AM 
