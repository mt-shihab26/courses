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


int lower_bound(vector<int> arr, int tg) {
    int low = 0, high = arr.size() - 1, mid, ans = -1;
    while (low <= high) {
        mid = low + (high - low) / 2;
        if (arr[mid] >= tg) {
            ans = mid;
            high = mid - 1;
        }
        else {
            low = mid + 1;
        }
    }
    return ans;
}

int main(void) {
    first_io();

    int n, m, tmp, i, i2 = 1, rs;
    while (true) {
        cin >> n >> m;
        if (n == 0 && m == 0) return 0;
        vector<int> vc;
        for (i = 0; i < n; i++) {
            cin >> tmp;
            vc.push_back(tmp);
        }
        // print_vector(vc);
        sort(vc.begin(), vc.end());
        // print_vector(vc);

        cout << "CASE# " << i2++ << ":" << endn;
        while (m--) {
            cin >> tmp;
            rs = lower_bound(vc, tmp);
            if (vc[rs] != tmp)
                cout << tmp << " not found" << endn;
            else 
                cout << tmp << " found at " << rs+1 << endn;
        }
    }

    return 0;
}
// Solved by: Shihab Mahamud (github.com/shihab4t)
// Thursday, October 07, 2021 | 06:12:33 AM (+06)
