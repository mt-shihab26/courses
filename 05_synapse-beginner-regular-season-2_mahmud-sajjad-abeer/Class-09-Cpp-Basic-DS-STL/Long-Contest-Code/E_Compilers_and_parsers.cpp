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
inline void file_io() {freopen("input", "r", stdin);freopen("output", "w", stdout);}
vector<int> get_randoms(int amount, int first, int last) {vector<int> tmp;srand(time(0));for (int i = 0; i < amount; i++)tmp.push_back(first + ((rand() % (last - first + 1))));return tmp;}
template <typename TP> void print_array(TP arr[], int n) {for (int i = 0; i < n; i++)cout << arr[i] << " ";cout << '\n';}
template <typename TP> void print_vector(const TP &vc) {for (auto &ith : vc)cout << ith << " ";cout << '\n';}


void test_case() {
    string cmd;
    getline(cin, cmd);
    int len = cmd.length();
    int ct = 0, x = 0;;
    for (int i = 0; i < len; i++) {
        if (cmd[i] == '<')
            x++;
        else {
            x--;
            if (x < 0) break;
        }
        if (x == 0) ct = i+1;
    }
    cout << ct << endn;
}

int main(void) {
    first_io();

    int t;
    cin >> t;
    cin.ignore();
    while (t--) {
        test_case();
    }
}
// Solved By: shihab4t
// Thursday, September 23, 2021 | 12:03:08 PM (+06)
