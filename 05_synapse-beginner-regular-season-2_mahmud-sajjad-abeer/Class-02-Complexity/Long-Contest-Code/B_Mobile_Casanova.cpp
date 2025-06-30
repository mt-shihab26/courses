#include <bits/stdc++.h>
using namespace std;

typedef long long int llint;
typedef unsigned long long int ullint;
typedef short int sint;
typedef unsigned int uint;
#define endn "\n"
#define umap unordered_map
#define uset unordered_set
#define pb push_back

int main(void) {
    ios_base::sync_with_stdio(false);
    cin.tie(NULL); cout.tie(NULL);
    
    uint n, fct = 1;
    while (cin >> n, n) {
        cout << "Case " << fct << ":" << endn;
        fct++;
        uint nums[n+1];
        for (int i = 0; i < n; i++) {
            cin >> nums[i];
        }
        nums[n] = 0;
        uint start, end;
        for (int i = 1; i <= n; i++) {
            if (nums[i-1]+1 != nums[i]) {
                cout << '0' << nums[i-1] << endn;
            }
            else {
                start = nums[i-1];
                cout << '0' << nums[i-1] << '-';
                while (nums[i-1]+1 == nums[i]) {
                    i++;
                }
                end = nums[i-1];
                uint mod = 10;
                while (start - (start % mod) != end - (end % mod)) {
                    mod *= 10;
                }
                cout << (end % mod) << endn;
            }
        }
        cout << endn;
    }
}
// Solved By: shihab4t
// Tuesday, August 03, 2021 | 09:20:02 PM (+06)
// Accepted: 06:47:38 AM (+06)
