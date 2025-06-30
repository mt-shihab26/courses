#include <bits/stdc++.h>
using namespace std;

#define endn                '\n'
#define umap                unordered_map
#define uset                unordered_set
#define pb                  push_back

#define GLOBAL_ARRAY_SIZE   10000005
#define LOCAL_ARRAY_SIZE    100005
#define PI                  acos(-1.0)

typedef short int               sint;
typedef unsigned int            uint;
typedef long long int           llint;
typedef unsigned long long int  ullint;

inline void first_io() {ios_base::sync_with_stdio(false);cin.tie(NULL);}
inline void file_io() {freopen("input.txt", "r", stdin);freopen("output.txt", "w", stdout);}
vector<int> get_randoms(int amount, int first, int last) {vector<int> tmp;srand(time(0));for (int i = 0; i < amount; i++)tmp.push_back(first + ((rand() % (last - first + 1))));return tmp;}
template <typename Tp> void print_array(Tp arr[], int n) {for (int i = 0; i < n; i++) cout << arr[i] << " "; cout << '\n';}
template <typename Tp> void print_vector(const Tp &vc) {for (auto &ith : vc) cout << ith << " "; cout << '\n';}
template <typename Tp> void print_stack(stack<Tp> st) {while (!st.empty()) { cout << st.top() << " "; st.pop();} cout << '\n';}


llint digit_sum(llint n) {
    llint sm = 0;
    while (n) {
        sm += n % 10;
        n = n / 10;
    }
    return sm;
}

llint broute_force(llint n, llint s) {
    llint ct = 0;
    for (llint i = 1; i <= n; i++) {
        if (i - digit_sum(i) >= s) {
            // cout << i << " " << digit_sum(i) << endn;
            ct++;
        }
        // cout << i << " " << digit_sum(i) << endn;
    }
    return ct;
}

llint solution(llint n, llint s) {
    llint low = 1, high = n, mid, ans = 0;

    while (low <= high) {
        mid = low + (high - low) / 2;

        if (mid - digit_sum(mid) >= s) {
            ans = mid;
            high = mid - 1;
        }
        else {
            low = mid + 1;
        }
    }
    if (ans == 0) return 0;
    return n - ans + 1;
}

int main(void) {
    first_io();

    llint n, s;
    cin >> n >> s;
    
    // cout << broute_force(n, s) << endn;
    cout << solution(n, s) << endn;

    return 0;
}
// Solved by: Shihab Mahamud (github.com/shihab4t)
// Thursday, October 07, 2021 | 09:48:23 AM (+06)
