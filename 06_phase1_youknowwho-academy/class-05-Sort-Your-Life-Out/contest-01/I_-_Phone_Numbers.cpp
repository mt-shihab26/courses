#include <bits/stdc++.h>
using namespace std;

int main()
{
    ios_base ::sync_with_stdio(false);
    cin.tie(NULL);

    int n, k;
    string str;
    cin >> n >> k >> str;
    set<char> s(str.begin(), str.end());
    if (str.size() >= k)
        for (str.resize(k);;)
        {
            auto it = s.upper_bound(str.back());
            str.pop_back();
            if (it != s.end())
            {
                str.push_back(*it);
                break;
            }
        }
    if (k > str.size())
        str += string(k - str.size(), *s.begin());
    cout << str;

    return 0;
}