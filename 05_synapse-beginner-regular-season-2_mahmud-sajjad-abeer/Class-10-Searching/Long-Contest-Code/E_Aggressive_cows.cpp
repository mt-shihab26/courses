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
template <typename Tp> void print(Tp arr[], int n) {for (int i = 0; i < n; i++) cout << arr[i] << " "; cout << '\n';}
template <typename Tp> void print(const Tp &vc) {for (auto &ith : vc) cout << ith << " "; cout << '\n';}
template <typename Tp> void print(stack<Tp> st) {while (!st.empty()) { cout << st.top() << " "; st.pop();} cout << '\n';}
template <typename Tp, typename Tp2> void print(unordered_map<Tp, Tp2> ump) {for (auto &ith : ump) {cout << ith.first << " " << ith.second << '\n';}cout << '\n';}



int ct_cows(unordered_map<int, bool> &mp, int x, int mx) {
    int ct = 0;
    for (int i = 0; i <= mx;) {
        if (mp[i] == true) {
            ct++;
            i += x;
        }
        else {
            i++;
        }
    }
    return ct;
}

void test() {
    int n, cows;
    cin >> n >> cows;
    int mx = INT_MIN, tmp;
    umap<int, bool> mp; 
    for (int i = 0; i < n; i++) {
        cin >> tmp;
        mp[tmp] = true;
        mx = max(mx, tmp);
    }


    int low = 0, high = mx , mid, ans = -1;
    while (low <= high) {
        mid = low + (high - low) / 2;
        if (ct_cows(mp, mid, mx) >= cows) {
            ans = mid;
            low = mid + 1;
        }
        else {
            high = mid - 1;
        }
    }
    cout << ans << endn;
}

int main(void) {
    first_io();

    int t;
    cin >> t;
    while (t--) {
        test();
    }

    return 0;
}
// Solved by: Shihab Mahamud (github.com/shihab4t)
// Friday, October 08, 2021 | 07:55:10 AM (+06)
