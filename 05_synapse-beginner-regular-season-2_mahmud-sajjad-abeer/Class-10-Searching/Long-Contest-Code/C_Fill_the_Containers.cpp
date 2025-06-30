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


int main(void) {
    first_io();

    // file_io();

    int n, x;
    while (cin >> n) {
        cin >> x;
        vector<int> a(n);
        for (int i = 0; i < n; i++) {
            cin >> a[i];
        }
        int slice = n - x + 1;
        int final_st, st;
        int final_ed, ed;
        final_st = st = 0;
        final_ed = ed = slice-1;
    
        int i, j, mn = INT_MAX;
        for (i = 0; i < x; i++) {
            int sum = 0;
            for (j = st; j <= ed; j++) {
                sum += a[j];
            }
            if (mn > sum) {
                final_st = st;
                final_ed = ed;
                mn = sum;
            }
            cout << sum << endn;
            st++;
            ed++;
        }

        cout << mn << endn;
        
        int mx = mn;
        for (int i = 0; i < final_st; i++) {
            mx = max(mx, a[i]);
        }
        for (int i = final_ed+1; i < n; i++) {
            mx = max(mx, a[i]);
        }
        cout << mx << endn;
    }
    
    return 0;
}
// Solved by: Shihab Mahamud (github.com/shihab4t)
// Tuesday, October 05, 2021 | 12:42:06 PM (+06)
