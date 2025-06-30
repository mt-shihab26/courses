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


int lower_bound(const vector<int> &v, int x) {
    int lw = 0, hi = v.size()-1, ans = v.size(), mid;
    while (lw <= hi) {
        mid = (hi + lw) / 2;
        if (v[mid] >= x) {
            ans = mid;
            hi = mid-1;
        }
        else {
            lw = mid+1;
        }
    }
    return ans;
}
int upper_bound(const vector<int> &v, int x) {
    int lw = 0, hi = v.size()-1, ans = v.size(), mid;
    while (lw <= hi) {
        mid = (hi + lw) / 2;
        if (v[mid] > x) {
            ans = mid;
            hi = mid-1;
        }
        else {
            lw = mid+1;
        }
    }
    return ans;
}

int main(void) {
    first_io();

    int n;
    cin >> n;
    vector<int> a(n);
    for (int i = 0; i < n; i++) {
        cin >> a[i];
    }
    int q, x, pre, aft;
    cin >> q;
    while (q--) {
        cin >> x;
        pre = lower_bound(a, x)-1;
        aft = upper_bound(a, x);

        if (pre < 0) cout << "X ";
        else cout << a[pre] << " ";
        if (aft >= n) cout << "X" << endn;
        else cout << a[aft] << endn; 
    }

    return 0;
}
// Solved by: Shihab Mahamud (github.com/shihab4t)
// Tuesday, October 05, 2021 | 11:51:50 AM (+06)
