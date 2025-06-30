#include <bits/stdc++.h>
using namespace std;

#define endn                '\n'
#define umap                unordered_map
#define uset                unordered_set
#define pb                  push_back

// Constants
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
template <typename TP> void print_array(TP arr[], int n) {for (int i = 0; i < n; i++)cout << arr[i] << " ";cout << '\n';}
template <typename TP> void print_vector(const TP &vc) {for (auto &ith : vc)cout << ith << " ";cout << '\n';}


void test_case() {
    
}

int main(void) {
    first_io();

    int n, m, tmp;

    while (cin >> n >> m) {
        umap<int, vector<int>> mp;
        for (int i = 0; i < n; i++) {
            cin >> tmp;
            if (mp.find(tmp) == mp.end())
                mp[tmp] = vector<int>(1, i+1);
            else
                mp[tmp].pb(i + 1);
        }

        int k, v;
        while (m--) {
            cin >> k >> v;

            if (mp.find(v) == mp.end() || mp[v].size() < k)
                cout << 0 << endn;
            else 
                cout << mp[v][k-1] << endn;
        }
    }
    
    return 0;
}
// Solved by: Shihab Mahamud (github.com/shihab4t)
// Thursday, September 30, 2021 | 11:28:12 PM (+06)
