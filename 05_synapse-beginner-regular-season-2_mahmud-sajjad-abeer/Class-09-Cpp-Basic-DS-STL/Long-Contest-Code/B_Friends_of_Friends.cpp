#include <bits/stdc++.h>
using namespace std;
#define endn '\n'
#define umap unordered_map
#define uset unordered_set
#define pb push_back
#define GLOBAL_ARRAY_SIZE 10000005
#define LOCAL_ARRAY_SIZE 100005
typedef short int sint;
typedef unsigned int uint;
typedef long long int llint;
typedef unsigned long long int ullint;
// first_io(); file_io(); get_randoms(); print_array(); print_vector();
inline void first_io() {ios_base::sync_with_stdio(false);cin.tie(NULL);}
inline void file_io() {freopen("input","r",stdin);freopen("output","w",stdout);}
vector<int> get_randoms(int amount, int start, int end) {vector<int>tmp;srand(time(0));
for (int i=0;i<amount;i++){tmp.push_back(start+((rand()%(end-start+1))));}return tmp;}
template <typename tp> void print_array(tp arr[],int n) {for(int i=0;i<n;i++)
cout<<arr[i]<<" ";cout<<'\n'; } template <typename tp> void print_vector(const tp &vc) 
{for (auto &ith : vc) cout << ith << " ";cout << '\n';}


void test_case() {

}

int main(void) {
    first_io();

    int t, fri, fft;
    uset<int> will_ff;
    umap<int, bool> mp;
    cin >> t;
    while (t--) {
        cin >> fri >> fft;
        mp[fri] = true;
        while (fft--) {
            cin >> fri;
            will_ff.insert(fri);
        } 
    }
    int ct = 0;
    for (int ith : will_ff) {
        if (mp[ith] == false) {
            ct++;
        }
    }
    cout << ct << endn;
}
// Solved By: shihab4t
// Tuesday, September 21, 2021 | 12:52:13 PM (+06)
