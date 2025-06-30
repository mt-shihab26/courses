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
ostream &operator<<(ostream &ostream, const vector<T> &v)
{
    for (auto ith : v)
        cout << ith << " ";
    return ostream;
}

#define _end_ '\n'
#define _vec_ vector
#define _str_ string
#define _len_(a) a.size()
#define _slen_(s) s.length()

int32_t main()
{
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);

    int n;
    cin >> n;
    _vec_<int> a(n), f(n);

    cin >> a >> f;

    sort(a.begin(), a.end());
    sort(f.begin(), f.end());

    bool is = true;

    for (int i = 0; i < n; i++)
    {
        if (a[i] != f[i])
        {
            is = false;
        }
    }

    cout << (is ? "yes" : "no") << _end_;

    return 0;
}
