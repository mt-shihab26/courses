// #include <bits/stdc++.h>
// using namespace std;

// #define endn '\n'

// int main(void) {
//     ios_base::sync_with_stdio(false);
//     cin.tie(NULL);
    
//     int n, d, r, i, length, cost;
//     while (true) {
//         cin >> n >> d >> r;
//         if (n == 0 && d == 0 && r == 0) return 0;
//         vector<int> morning(n), evening(n);
//         for (i = 0; i < n; i++) cin >> morning[i];
//         for (i = 0; i < n; i++) cin >> evening[i];

//         sort(morning.begin(), morning.end());
//         sort(evening.begin(), evening.end(), greater<int>());

//         cost = 0;
//         for (i = 0; i < n; i++) {
//             length = morning[i]+evening[i];
//             if (length > d) {
//                 cost += (length - d) * r;
//             }
//         }
//         cout << cost << endn;
//     }
// }
// // Solved By: shihab4t
// // Wednesday, September 01, 2021 | 02:12:54 PM (+06)



#include <bits/stdc++.h>
using namespace std;

#define endn '\n'

bool incre(int a, int b) {
    return a > b;
}

bool decre(int a, int b) {
    return b > a;
}

void bubble_sort(vector<int> &a, bool (&cmp)(int , int)) {
    int len = a.size(), i, j;
    for (i = 0; i < len; i++) {
        for (j = 1; j < len; j++) {
            if (cmp(a[j-1], a[j])) {
                swap(a[j-1], a[j]);
            }
        }
    }
}

int main(void) {
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);
    
    int n, d, r, i, length, cost;
    while (true) {
        cin >> n >> d >> r;
        if (n == 0 && d == 0 && r == 0) return 0;
        vector<int> morning(n), evening(n);
        for (i = 0; i < n; i++) cin >> morning[i];
        for (i = 0; i < n; i++) cin >> evening[i];

        bubble_sort(morning, incre);
        bubble_sort(evening, decre);

        cost = 0;
        for (i = 0; i < n; i++) {
            length = morning[i]+evening[i];
            if (length > d) {
                cost += (length - d) * r;
            }
        }
        cout << cost << endn;
    }
}
// Solved By: shihab4t
// Wednesday, September 01, 2021 | 02:12:54 PM (+06)
