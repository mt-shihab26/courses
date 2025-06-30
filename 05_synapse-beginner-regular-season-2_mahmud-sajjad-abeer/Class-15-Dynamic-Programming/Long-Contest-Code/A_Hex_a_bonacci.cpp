#include <bits/stdc++.h>
using namespace std;

#define endn '\n'
#define umap unordered_map
#define uset unordered_set
#define pb push_back

typedef short int sint;
typedef unsigned int uint;
typedef long long int llint;
typedef unsigned long long int ullint;

#define debug(...) __f(#__VA_ARGS__, __VA_ARGS__)
template <typename Arg1> void __f(const char *name, Arg1 &&arg1) { cout << name << " = " << arg1 << std::endl; }
template <typename Arg1, typename... Args> void __f(const char *names, Arg1 &&arg1, Args &&...args) { const char *comma = strchr(names + 1, ','); cout.write(names, comma - names) << " = " << arg1 << " | "; __f(comma + 1, args...); }
inline void first_io() { ios_base::sync_with_stdio(false); cin.tie(NULL); }
inline void file_io() { freopen("input.txt", "r", stdin); freopen("output.txt", "w", stdout); }
vector<int> get_randoms(int amount, int first, int last) { vector<int> tmp; srand(time(0)); for (int i = 0; i < amount; i++) tmp.push_back(first + ((rand() % (last - first + 1)))); return tmp; }
template <typename Tp> void print(Tp arr[], int n) { for (int i = 0; i < n; i++) cout << arr[i] << " "; cout << '\n'; }
template <typename Tp> void print(const Tp &vc) { for (auto &ith : vc) cout << ith << " "; cout << '\n'; }
template <typename Tp> void print(stack<Tp> st) { while (!st.empty()) { cout << st.top() << " "; st.pop(); } cout << '\n'; }
template <typename Tp, typename Tp2> void print(unordered_map<Tp, Tp2> ump) { for (auto &ith : ump) { cout << ith.first << " " << ith.second << '\n'; } cout << '\n'; }

#define GLOBAL_ARRAY_SIZE 10000005
#define LOCAL_ARRAY_SIZE 100005
#define PI acos(-1.0)
#define EPS 1e-9
#define MOD 1000000007


#define MAX_N 10000
#define EMPTY_VALUE -1

llint memo[10000+2];

void init() {
    for (int i = 0; i <= MAX_N; i++) {
        memo[i] = EMPTY_VALUE;
    }
}

llint a, b, c, d, e, f;

llint fn(llint n) {
    if (n == 0) return a;
    if (n == 1) return b;
    if (n == 2) return c;
    if (n == 3) return d;
    if (n == 4) return e;
    if (n == 5) return f;

    if (memo[n] != EMPTY_VALUE) {
        return memo[n];
    }

    memo[n] = (fn(n-1) + fn(n-2) + fn(n-3) + fn(n-4) + fn(n-5) + fn(n-6)) % 10000007;
    return memo[n];
}


int main() {
    llint n, cases;
    scanf("%lld", &cases);
    for (llint caseno = 1; caseno <= cases; ++caseno) {
        init();
        scanf("%lld %lld %lld %lld %lld %lld %lld", &a, &b, &c, &d, &e, &f, &n);
        printf("Case %lld: %lld\n", caseno, fn(n) % 10000007);
    }

    return 0;
}
// Solved by: Shihab Mahamud (github.com/shihab4t)
// Thursday, November 11, 2021 | 10:11:56 PM (+06)
