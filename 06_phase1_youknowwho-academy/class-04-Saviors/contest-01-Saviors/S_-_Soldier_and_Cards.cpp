#include <bits/stdc++.h>
using namespace std;

template <typename T>
istream &operator>>(istream &istream, vector<T> &v)
{
    int len = v.size();
    for (int i = 0; i < len; i++)
        cin >> v[i];
    return istream;
}
template <typename T>
ostream &operator<<(ostream &ostream, const set<T> &s)
{
    for (auto ith : s)
        cout << ith << " ";
    return ostream;
}
template <typename T>
ostream &operator<<(ostream &ostream, const vector<T> &v)
{
    for (auto ith : v)
        cout << ith << " ";
    return ostream;
}
template <typename T, typename T2>
ostream &operator<<(ostream &ostream, const pair<T, T2> &p)
{
    return (ostream << p.first << " " << p.second);
}
template <typename T, typename T2>
ostream &operator<<(ostream &ostream, const map<T, T2> &mp)
{
    for (auto ith : mp)
        cout << ith << "\n";
    return ostream;
}

#define ed '\n'
#define gp ' '
#define i64 long long int
#define str string
#define vec vector
#define all(x) x.begin(), x.end()

i64 facto(i64 x)
{
    i64 ans = 1;
    for (int i = 2; i <= x; i++)
    {
        ans *= i;
    }
    return ans;
}

int32_t main()
{
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);

    int n;
    cin >> n;
    int k1, k2;
    cin >> k1;
    vec<int> kv1(k1);
    cin >> kv1;
    cin >> k2;
    vec<int> kv2(k2);
    cin >> kv2;

    i64 mx = facto(n) * (n + 1);

    deque<int> kd1, kd2;
    for (int i = 0; i < k1; i++)
        kd1.push_back(kv1[i]);
    for (int i = 0; i < k2; i++)
        kd2.push_back(kv2[i]);

    // cout << mx << ed;

    int ct = 0;

    while ((!kd1.empty()) && (!kd2.empty()))
    {
        if (kd1.front() < kd2.front())
        {
            kd2.push_back(kd1.front());
            kd2.push_back(kd2.front());
            kd1.pop_front();
            kd2.pop_front();
        }
        else
        {
            kd1.push_back(kd2.front());
            kd1.push_back(kd1.front());
            kd1.pop_front();
            kd2.pop_front();
        }
        ct++;
        if (ct > mx)
        {
            cout << -1 << ed;
            return 0;
        }
    }

    int win;
    if (kd1.empty())
        win = 2;
    if (kd2.empty())
        win = 1;

    cout << ct << " " << win << ed;

    return 0;
}
// Shihab Mahamud (github.com/shihab4t)
