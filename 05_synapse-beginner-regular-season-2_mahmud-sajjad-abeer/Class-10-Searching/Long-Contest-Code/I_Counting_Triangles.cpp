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


template<typename Tp>
void marge_sort(vector<Tp> &arr, int start, int end) {
    if (start == end) return;
    int mid = (start + end) / 2;
    marge_sort(arr, start, mid);
    marge_sort(arr, mid+1, end);

    int len = end - start + 1;
    vector<Tp> tmp(len);
    for (int i = 0, a = start, b = mid+1; i < len; i++) {
        if (a > mid) tmp[i] = arr[b++];
        else if (b > end) tmp[i] = arr[a++];
        else if (arr[a] >= arr[b]) tmp[i] = arr[b++];
        else tmp[i] = arr[a++];
    }
    for (int i = 0, j = start; i < len; i++, j++)
        arr[j] = tmp[i];
}

int brute_force(vector<int> &arr) {
    cout << endn;
    int len = arr.size(), i, j, k;
    int ct = 0;
    for (i = 0; i < len; i++) {
        for (j = i + 1; j < len; j++) {
            for (k = j + 1; k < len; k++) {
                if (i != j && j != k && i != j) {
                    if (arr[i] + arr[j] > arr[k]) {
                        ct++;
                    }
                }
                cout << arr[i] << " " << arr[j] << " " << arr[k] << endn;

            }
        }
    }
    return ct;
}

int solution(vector<int> arr) {
    int len = arr.size(), i, j, k;
    int ct = 0;
    for (i = 0; i < len; i++) {
        for (j = i + 1; j < len; j++) {
            auto lw = lower_bound(arr.begin()+j+1, arr.end(), arr[i] + arr[j]);
            cout << lw - arr.begin() << " ";
            // ct += ((lw - arr.begin()) - j + 1);
            // for (k = j + 1; k < len; k++) {
                // cout << arr[i] << " " << arr[j] << " " << arr[k] << endn;
            // }
        }
        cout << endn;
    }
    return ct;
}

void test_case() {
    int n;
    cin >> n;
    vector<int> arr(n);
    for (int i = 0; i < n; i++) {
        cin >> arr[i];
    }
    marge_sort(arr, 0, arr.size()-1);
    cout << endn;
    print_vector(arr);

    // cout << brute_force(arr) << endn;
    cout << solution(arr) << endn; 
}

int main(void) {
    first_io();

    int t, i = 1;
    cin >> t;
    while (t--) {
        cout << "Case " << i++ << ": ";
        test_case();
    }

    return 0;
}
// Solved by: Shihab Mahamud (github.com/shihab4t)
// Thursday, October 07, 2021 | 10:58:14 AM (+06)
