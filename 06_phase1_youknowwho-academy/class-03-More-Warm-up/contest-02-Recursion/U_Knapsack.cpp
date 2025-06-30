#include <bits/stdc++.h>
using namespace std;

template <typename T> istream &operator>>(istream &istream, vector<T> &v) { int len = v.size(); for (int i = 0; i < len; i++) cin >> v[i]; return istream; }
template <typename T> ostream &operator<<(ostream &ostream, const set<T> &s) { for (auto ith : s) cout << ith << " "; return ostream;}
template <typename T> ostream &operator<<(ostream &ostream, const vector<T> &v) { for (auto ith : v) cout << ith << " "; return ostream; }
template <typename T, typename T2> ostream &operator<<(ostream &ostream, const pair<T, T2> &p) { return (ostream << p.first << " " << p.second); }
template <typename T, typename T2> ostream &operator<<(ostream &ostream, const map<T, T2> &mp) { for (auto ith : mp) cout << ith << "\n"; return ostream;}

#define ed '\n'
#define gp ' '
#define i64 long long int
#define str string
#define vec vector

int fin_max(vec<int> &w, vec<int> &v, int &W, int i, int ws, int vs)
{
    if (ws > W) return 0;
    if (i == -1) return vs;

    int mx1 = fin_max(w, v, W, i-1, ws+w[i], vs+v[i]);
    int mx2 = fin_max(w, v, W, i-1, ws, vs);
    return max(mx1, mx2);
}

int32_t main()
{
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);

    int N, W;
    cin >> N >> W;
    vec<int> w(N), v(N);
    for (int i = 0; i < N; i++)
    {
        cin >> w[i] >> v[i];    
    }

    int mx = fin_max(w, v, W, N-1, 0, 0);
    cout << mx << ed;

    return 0;
}
// Shihab Mahamud (github.com/shihab4t)
