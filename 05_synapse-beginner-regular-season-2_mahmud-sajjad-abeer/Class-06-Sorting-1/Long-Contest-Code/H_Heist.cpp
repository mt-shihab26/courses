#include <bits/stdc++.h>
using namespace std;

#define endn '\n'

int main(void) {
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);
    
    int n; cin >> n;
    int mn = INT_MAX, mx = 0, tmp;
    for (int i = 0; i < n; i++) {
        cin >> tmp;
        mx = max(mx, tmp);
        mn = min(mn, tmp);
    }
    cout << (mx - mn + 1) - n << endn;
}
// Solved By: shihab4t
// Wednesday, September 01, 2021 | 04:51:54 AM (+06)




// #include <bits/stdc++.h>
// using namespace std;

// #define endn '\n'

// void selection_sort(vector<int> &a) {
//     int len = a.size(), min_indx, i, j;
//     for (i = 0; i < len; i++) {
//         min_indx = i;
//         for (j = i + 1; j < len; j++) {
//             if (a[j] < a[min_indx]) {
//                 min_indx = j;
//             }
//         }
//         swap(a[min_indx], a[i]);
//     }
// }

// int main(void) {
//     ios_base::sync_with_stdio(false);
//     cin.tie(NULL);
    
//     int n; cin >> n;
//     vector<int> va(n);
//     for (int i = 0; i < n; i++) {
//         cin >> va[i];
//     }
//     selection_sort(va);

//     int ans = (va[n-1] - va[0] + 1) - n;
//     cout << ans << endn;
// }
// // Solved By: shihab4t
// // Wednesday, September 01, 2021 | 04:51:54 AM (+06)
