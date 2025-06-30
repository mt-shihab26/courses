#include <bits/stdc++.h>
using namespace std;
// Macros
typedef long long int lli;
typedef long double ld;
#define endn "\n"

// Solve
void test(void) {
    int n;
    cin >> n;
    int arr[n], even = 0, odd = 0, even_indx = 0, odd_index = 0;
    for (int i = 0; i < n; i++) {
        cin >> arr[i];
        if (arr[i] % 2) {
            odd++;
            if (!odd_index)
                odd_index = i+1;
        }
        else {
            even++;
            if (!even_indx) 
                even_indx = i+1;
        }
    }
    if (even < odd) {
        cout << even_indx << endn;
    }
    else {
        cout << odd_index << endn;
    }
}

int main(void) {
    test();
    return 0;
}
// by: shihab4t
