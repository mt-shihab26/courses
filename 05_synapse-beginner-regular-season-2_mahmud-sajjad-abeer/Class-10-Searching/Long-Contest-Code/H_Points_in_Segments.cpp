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


template <typename Tp>
int lower_bound(const vector<Tp> &arr, Tp x) {
    int lw = 0, hi = arr.size()-1, ans = arr.size(), mid;
    while (lw <= hi) {
        mid = (hi + lw) / 2;
        if (arr[mid] >= x) {
            ans = mid;
            hi = mid-1;
        }
        else {
            lw = mid+1;
        }
    }
    return ans;
}

template <typename Tp>
int upper_bound(const vector<Tp> &arr, Tp x) {
    int lw = 0, hi = arr.size()-1, ans = arr.size(), mid;
    while (lw <= hi) {
        mid = (hi + lw) / 2;
        if (arr[mid] > x) {
            ans = mid;
            hi = mid-1;
        }
        else {
            lw = mid+1;
        }
    }
    return ans;
}

void test_case() {
    int n, q;
    cin >> n >> q;
    vector<int> point(n);
    for (int i = 0; i < n; i++) {
        cin >> point[i];
    }
    int x, y;
    while (q--) {
        cin >> x >> y;
        // auto up = upper_bound(point.begin(), point.end(), y);
        // auto lw = lower_bound(point.begin(), point.end(), x);
        int up = upper_bound(point, y);
        int lw = lower_bound(point, x);
        cout << up - lw << endn;
    }
}

int main(void) {
    first_io();

    int t, i = 1;
    cin >> t;
    while (t--) {
        cout << "Case " << i++ << ":\n";
        test_case();
    }

    return 0;
}
// Solved by: Shihab Mahamud (github.com/shihab4t)
// Thursday, October 07, 2021 | 09:25:56 AM (+06)
