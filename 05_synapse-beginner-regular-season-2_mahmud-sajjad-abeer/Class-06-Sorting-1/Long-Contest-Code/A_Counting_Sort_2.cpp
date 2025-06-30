#include <bits/stdc++.h>
using namespace std;
#define endn '\n'

int frequency_arr[105];

int main(void) {
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);
    
    int n;
    cin >> n;
    int tmp;
    for (int i = 0; i < n; i++) {
        cin >> tmp;
        frequency_arr[tmp]++;
    }
    for (int i = 0; i < 104; i++) {
        while (frequency_arr[i]--) {
            cout << i << " ";
        }
    }
}
// Solved By: shihab4t
// Wednesday, September 01, 2021 | 01:10:23 AM (+06)
