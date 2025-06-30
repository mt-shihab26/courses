#include <bits/stdc++.h>
using namespace std;

typedef long long int llint;
typedef unsigned long long int ullint;
typedef short int sint;
#define endn "\n"
#define umap unordered_map

umap<char, int> symbols = {{'[', -1}, {'{', -2}, {'(', -3}, {']', 1}, {'}', 2}, {')', 3}};

string is_balanced(void)
{
    string s;
    cin >> s;
    stack<char> st;
    for (int i = 0; i < s.size(); i++)
    {
        if (symbols[s[i]] < 0)
        {
            st.push(s[i]);
        }
        else
        {
            if (st.empty())
                return "NO";
            auto top = st.top();
            st.pop();
            if (symbols[top] + symbols[s[i]] != 0)
            {
                return "NO";
            }
        }
    }
    if (st.empty())
    {
        return "YES";
    }
    else
    {
        return "NO";
    }
}

int main(void)
{
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);
    cout.tie(NULL);

    int t;
    cin >> t;
    while (t--)
    {
        cout << is_balanced() << endn;
    }
}
// Solved By: shihab4t
// Monday, July 12, 2021 | 04:02:52 AM (+06)
