#include <bits/stdc++.h>
using namespace std;

#define endn                '\n'
#define umap                unordered_map
#define uset                unordered_set
#define pb                  push_back

typedef short int               sint;
typedef unsigned int            uint;
typedef long long int           llint;
typedef unsigned long long int  ullint;

#define debug(...) __f(#__VA_ARGS__, __VA_ARGS__)
template < typename Arg1 >void __f(const char* name, Arg1&& arg1){cout << name << " = " << arg1 << std::endl;}
template < typename Arg1, typename... Args> void __f(const char* names, Arg1&& arg1, Args&&... args){ const char* comma = strchr(names+1, ','); cout.write(names, comma - names) << " = " << arg1 <<" | "; __f(comma+1, args...);}
inline void first_io() {ios_base::sync_with_stdio(false);cin.tie(NULL);}
inline void file_io() {freopen("input.txt", "r", stdin);freopen("output.txt", "w", stdout);}
vector<int> get_randoms(int amount, int first, int last) {vector<int> tmp;srand(time(0));for (int i = 0; i < amount; i++)tmp.push_back(first + ((rand() % (last - first + 1))));return tmp;}
template <typename Tp> void print(Tp arr[], int n) {for (int i = 0; i < n; i++) cout << arr[i] << " "; cout << '\n';}
template <typename Tp> void print(const Tp &vc) {for (auto &ith : vc) cout << ith << " "; cout << '\n';}
template <typename Tp> void print(stack<Tp> st) {while (!st.empty()) { cout << st.top() << " "; st.pop();} cout << '\n';}
template <typename Tp, typename Tp2> void print(unordered_map<Tp, Tp2> ump) {for (auto &ith : ump) {cout << ith.first << " " << ith.second << '\n';} cout << '\n';}

#define GLOBAL_ARRAY_SIZE   10000005
#define LOCAL_ARRAY_SIZE    100005
#define PI                  acos(-1.0)
#define EPS                 1e-9
#define CONST               2*1e8

void test() {
    int n,k;
    cin >> n>> k;
    string s;
    cin >> s;

    int p1=-1;
    for (int i = 0; i < n; i++) {
        if(s[i]=='*') {
            p1=i;
            s[i] = 'X';
            break;
        }
    }
    int p2 = -1;
    for (int i = n-1; i >=0; i--) {
        if (s[i] == '*' || s[i]=='X'){
            p2 = i;
            s[i] = 'X';
            break;
        }
    }
    if(p1==p2) {
        cout<<1<<"\n";
        return;
    }

    int ans=2;

    int l=p1;
    

    for (int i = p1; i < p2 && l<p2; i++) {
        int r = l + k;
        while(r>l) {
            if(r>p2 || s[r]=='X') {
                break;
            }
            if(s[r]=='*') {
                ans++;
                l=r;
                s[r]='X';
                break;
            }
            r--;
        }
    }
    cout<<ans<<"\n";
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
