#include <bits/stdc++.h>
using namespace std;

#define endn                '\n'
#define umap                unordered_map
#define uset                unordered_set
#define pb                  push_back
#define GLOBAL_ARRAY_SIZE   10000005
#define LOCAL_ARRAY_SIZE    100005

typedef short int               sint;
typedef unsigned int            uint;
typedef long long int           llint;
typedef unsigned long long int  ullint;

inline void first_io() {ios_base::sync_with_stdio(false);cin.tie(NULL);}
inline void file_io() {freopen("input.txt", "r", stdin);freopen("output.txt", "w", stdout);}
vector<int> get_randoms(int amount, int first, int last) {vector<int> tmp;srand(time(0));for (int i = 0; i < amount; i++)tmp.push_back(first + ((rand() % (last - first + 1))));return tmp;}
template <typename TP> void print_array(TP arr[], int n) {for (int i = 0; i < n; i++)cout << arr[i] << " ";cout << '\n';}
template <typename TP> void print_vector(const TP &vc) {for (auto &ith : vc)cout << ith << " ";cout << '\n';}


int main(void) {
    first_io();

    int n, tmp, i, up, abs_value, len;
    bool is;
    vector<int> vc, abs_vc;
    while (cin >> n) {
        is = true;
        for (i = 0; i < n; i++) {
            cin >> tmp;
            vc.pb(tmp);
        }
        up = n-1;
        for (i = 1; i < n; i++) {
            abs_vc.pb(abs(vc[i]-vc[i-1]));
        }
        sort(abs_vc.begin(), abs_vc.end());
        len = abs_vc.size();
        for (i = 1; i < len; i++) {
            if (abs_vc[i-1]+1 != abs_vc[i]) {
                is = false;
                break;
            }
        }
        cout << (is ? "Jolly" : "Not jolly") << endn;
        vc.clear();
        abs_vc.clear();
    }    
    
    return 0;
}
// Solved by: Shihab Mahamud (github.com/shihab4t)
// Monday, September 27, 2021 | 12:18:57 PM (+06)
