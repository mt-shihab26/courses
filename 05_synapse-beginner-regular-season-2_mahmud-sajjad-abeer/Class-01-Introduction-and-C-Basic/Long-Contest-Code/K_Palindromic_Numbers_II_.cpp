// بسم الله الرحمن الرحيم
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
    string num;
    cin >> num;
    int len = num.length();
    for (int i = 0, j = len-1; i < len; i++, j--) {
        if (num[i] != num[j]) {
            cout << "No" << endn;
            return;
        }
    }
    cout << "Yes" << endn;
}

int main(void) {
    ios_base::sync_with_stdio(false);
    cin.tie(NULL); cout.tie(NULL);

    int t;
    cin >> t;
    for (int i = 1; i <= t; i++) {
        cout << "Case " << i <<": ";
        test();
    }
}
// Solved By: shihab4t
// Tuesday, July 27, 2021 | 12:23:11 AM (BST)