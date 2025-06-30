#include <bits/stdc++.h>
using namespace std;

#define endn '\n'
typedef long long int llint;

int main(void) {
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);
    
    int n;
    cin >> n;
    int arr[n];
    llint sum = 0;
    for (int i = 0; i < n; i++) {
        cin >> arr[i];
        sum += arr[i];
    }
    sort(arr, arr+n, greater<int>());
    
    int m, q;
    cin >> m;
    while (m--) {
        cin >> q;
        cout << sum - arr[q-1] << endn;
    }
}
// Solved By: shihab4t
// Friday, September 03, 2021 | 07:53:06 PM (+06)
