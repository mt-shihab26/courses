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
        cout << ith << "\n";
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

int32_t main()
{
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);

    set<str> st;
    str line;
    while (getline(cin, line))
    {
        str now = "";
        for (char c : line)
        {
            if (isalpha(c))
                now += tolower(c);
            else
            {
                if (now.length())
                    st.insert(now);
                now = "";
            }
        }
        if (now.size())
            st.insert(now);
    }

    for (auto x : st)
    {
        cout << x << ed;
    }

    return 0;
}
// Shihab Mahamud (github.com/shihab4t)
