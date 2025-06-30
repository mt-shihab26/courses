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
#define N 200010


#define N 200010
#define rep(i, n) for(int i = 0; i < n; ++i)

int main(void) {
	int n;
	int a, b;
	vector<pair<int, int> >x;
	int cnt;
	int ans[N];
	rep(i, N)ans[i] = 0;

	cin >> n;
	rep(i, n) {
		cin >> a >> b;
		x.push_back({ a,1 });
		x.push_back({ a + b,-1 });
	}

	sort(x.begin(), x.end());

	cnt = 0;
	rep(i, (x.size())-1) {
		cnt += x[i].second;
		ans[cnt] += ((x[i + 1].first) - (x[i].first));
	}

	rep(i, n - 1)cout << ans[i + 1] << " ";
	cout << ans[n] << endl;

	return 0;
}
// Solved by: Shihab Mahamud (github.com/shihab4t)
